export enum HydrusMessage {
	getFileByID = "getFileByID"
}

export interface IHydrusMessageEventDetail<TEvent extends HydrusMessage, TData> {
	/** The type of event this is */
	ev: TEvent;
	/** The data associated with this event */
	da: TData;
	/** The possible error associated with this event */
	er?: unknown;
	/** The unique ID for this transaction */
	tid: number;
}

export class HydrusMessageEvent<TEvent extends HydrusMessage, TData> extends CustomEvent<
	IHydrusMessageEventDetail<TEvent, TData>
> {
	constructor(event: TEvent, data: TData, timestamp: number) {
		super(event, {
			detail: {
				ev: event,
				da: data,
				tid: timestamp
			}
		});
	}
}

export interface HydrusMessageRequestMap {
	[HydrusMessage.getFileByID]: HydrusMessageEvent<HydrusMessage.getFileByID, number>;
}

export interface HydrusMessageResponseMap {
	[HydrusMessage.getFileByID]: HydrusMessageEvent<HydrusMessage.getFileByID, Blob>;
}
