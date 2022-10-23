import { MiiaWebError } from "$lib/errors.js";
import { timeout } from "$lib/js/helpers";
import { HydrusMessage, HydrusMessageEvent, type IHydrusMessageEventDetail } from "./events.js";

export class HydrusClient {
	public transaction_timeout = 10000;
	protected message_port!: ServiceWorkerRegistration;
	private eventHandlerBind = this.eventHandler.bind(this);
	private outstanding = new Map<
		number,
		{ resolve: (response: any) => void; reject: (reason: any) => void; timeout: NodeJS.Timeout }
	>();

	constructor() {}

	public async setup() {
		const registration = await navigator.serviceWorker.ready;
		this.message_port = registration;
		navigator.serviceWorker.addEventListener("message", this.eventHandlerBind);
	}

	public async destroy() {
		navigator.serviceWorker.removeEventListener("message", this.eventHandlerBind);
		(this.message_port as any) = undefined;
	}

	protected eventHandler(event: MessageEvent<any>) {
		const detail: IHydrusMessageEventDetail<HydrusMessage, unknown> = event.data;
		const outstanding = this.outstanding.get(detail.tid);
		if (outstanding) {
			if (detail.er) {
				outstanding.reject(detail.er);
			} else {
				outstanding.resolve(detail.da);
			}
			clearTimeout(outstanding.timeout);
			this.outstanding.delete(detail.tid);
		} else {
			throw new HydrusClientMissedMessageError(detail);
		}
	}

	protected postMessage<TEvent extends HydrusMessage, TData>(event: TEvent, data: TData) {
		return new Promise(async (resolve, reject) => {
			let transaction_id = this.createTransactionID();
			while (this.outstanding.has(transaction_id)) {
				await timeout(Math.random() * 10);
				transaction_id = this.createTransactionID();
			}

			const message = new HydrusMessageEvent(event, data, transaction_id);

			const timeout_id = setTimeout(() => {
				reject(new HydrusClientTimeoutError(message.detail));
			}, this.transaction_timeout);
			this.outstanding.set(transaction_id, { resolve, reject, timeout: timeout_id });
			navigator.serviceWorker.dispatchEvent(message);
		});
	}

	public getFileByID() {}

	protected createTransactionID() {
		return Date.now() + Math.random();
	}
}

export class HydrusClientNotReadyError extends MiiaWebError {
	public override name = "HydrusClientNotReadyError";
}

export class HydrusClientTimeoutError extends MiiaWebError {
	public override name = "HydrusClientTimeoutError";
	public transaction: IHydrusMessageEventDetail<HydrusMessage, unknown>;
	constructor(message: IHydrusMessageEventDetail<HydrusMessage, unknown>) {
		super(`Transaction ${message.tid} timed out\n${JSON.stringify(message)}`);
		this.transaction = message;
	}
}

export class HydrusClientMissedMessageError extends MiiaWebError {
	public override name = "HydrusClientMissedMessage";
	public transaction: IHydrusMessageEventDetail<HydrusMessage, unknown>;
	constructor(message: IHydrusMessageEventDetail<HydrusMessage, unknown>) {
		super(`Received untracked transaction ${message.tid}\n${JSON.stringify(message)}`);
		this.transaction = message;
	}
}
