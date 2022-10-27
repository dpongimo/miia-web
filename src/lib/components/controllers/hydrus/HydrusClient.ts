import { MiiaWebError } from "$lib/errors.js";
import { timeout } from "$lib/js/helpers";
import {
	ServiceWorkerMessage,
	HydrusMessageEvent,
	type HydrusMessageResponseMap,
	type IHydrusMessageEventDetail,
	HydrusMessageRequests
} from "./events.js";

export class HydrusClient {
	public transaction_timeout = 10000;
	protected message_port!: ServiceWorker;
	private eventHandlerBind = this.eventHandler.bind(this);
	private serviceControllerChange = this.attachEventHandler.bind(this);
	private outstanding = new Map<
		number,
		{ resolve: (response: any) => void; reject: (reason: any) => void; timeout: NodeJS.Timeout }
	>();

	constructor() {}

	public async setup() {
		navigator.serviceWorker.addEventListener("controllerchange", this.serviceControllerChange);
		navigator.serviceWorker.addEventListener("message", this.eventHandlerBind);
		await this.attachEventHandler();
	}

	protected async attachEventHandler() {
		const registration = await navigator.serviceWorker.ready;
		for (const [transaction_id, transaction] of this.outstanding) {
			transaction.reject(new ServiceWorkerReinstallError());
			clearTimeout(transaction.timeout);
		}
		this.outstanding.clear();
		if (!registration.active) {
			throw new HydrusClientNotReadyError("Service worker failed to register");
		}
		this.message_port = registration.active;
	}

	public async destroy() {
		navigator.serviceWorker.removeEventListener("message", this.eventHandlerBind);
		navigator.serviceWorker.removeEventListener("controllerchange", this.serviceControllerChange);
		(this.message_port as any) = undefined;
	}

	protected eventHandler(event: MessageEvent<any>) {
		const detail: IHydrusMessageEventDetail<ServiceWorkerMessage, unknown> = event.data;
		if (HydrusMessageRequests.has(detail.ev)) {
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
	}

	protected postMessage<TEvent extends ServiceWorkerMessage, TData>(event: TEvent, data: TData) {
		return new Promise(async (resolve, reject) => {
			let transaction_id = this.createTransactionID();
			while (this.outstanding.has(transaction_id)) {
				await timeout(Math.random() * 10);
				transaction_id = this.createTransactionID();
			}

			if (!this.message_port) {
				reject(new HydrusClientNotReadyError());
			}

			const message = new HydrusMessageEvent(event, data, transaction_id);
			const timeout_id = setTimeout(() => {
				reject(new HydrusClientTimeoutError(message.detail));
			}, this.transaction_timeout);
			this.outstanding.set(transaction_id, { resolve, reject, timeout: timeout_id });
			this.message_port.dispatchEvent(message);
		});
	}

	public getFileByID() {}

	protected createTransactionID() {
		return Date.now() + Math.random();
	}
}

export class HydrusClientNotReadyError extends MiiaWebError {
	public override name = "HydrusClientNotReadyError";
	constructor(message?: string, context?: unknown) {
		super(message ?? "Service Worker not ready yet!", context);
	}
}

export class ServiceWorkerReinstallError extends MiiaWebError {
	public override name = "ServiceWorkerReinstallError";
	constructor(message?: string, context?: unknown) {
		super(message ?? "Service worker was reinstalled during transactions", context);
	}
}

export class HydrusClientTimeoutError extends MiiaWebError {
	public override name = "HydrusClientTimeoutError";
	public transaction: IHydrusMessageEventDetail<ServiceWorkerMessage, unknown>;
	constructor(message: IHydrusMessageEventDetail<ServiceWorkerMessage, unknown>) {
		super(`Transaction ${message.tid} timed out\n${JSON.stringify(message)}`);
		this.transaction = message;
	}
}

export class HydrusClientMissedMessageError extends MiiaWebError {
	public override name = "HydrusClientMissedMessage";
	public transaction: IHydrusMessageEventDetail<ServiceWorkerMessage, unknown>;
	constructor(message: IHydrusMessageEventDetail<ServiceWorkerMessage, unknown>) {
		super(`Received untracked transaction ${message.tid}\n${JSON.stringify(message)}`);
		this.transaction = message;
	}
}
