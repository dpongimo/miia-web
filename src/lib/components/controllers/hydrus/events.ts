import type {
	FileID,
	IBasePage,
	IDetailedPage,
	ISimplifiedFileMetadata,
	TagSearchQuery
} from "./interfaces";

export enum ServiceWorkerMessage {
	search = "search",
	getMetadata = "metadata",
	getPagesList = "pagelist",
	getPage = "page",
	configUpdate = "cfg_update"
}

export interface IHydrusMessageEventDetail<TEvent extends ServiceWorkerMessage, TData> {
	/** The type of event this is */
	ev: TEvent;
	/** The data associated with this event */
	da: TData;
	/** The possible error associated with this event */
	er?: unknown;
	/** The unique ID for this transaction */
	tid: number;
}

export class HydrusMessageEvent<TEvent extends ServiceWorkerMessage, TData> extends CustomEvent<
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

export const HydrusMessageRequests = new Set<ServiceWorkerMessage>([
	ServiceWorkerMessage.search,
	ServiceWorkerMessage.getMetadata,
	ServiceWorkerMessage.getPagesList,
	ServiceWorkerMessage.getPage
]);
export interface HydrusMessageRequestMap {
	[ServiceWorkerMessage.search]: HydrusMessageEvent<ServiceWorkerMessage.search, TagSearchQuery>;
	[ServiceWorkerMessage.getPagesList]: HydrusMessageEvent<
		ServiceWorkerMessage.getPagesList,
		undefined
	>;
	[ServiceWorkerMessage.getMetadata]: HydrusMessageEvent<
		ServiceWorkerMessage.getMetadata,
		FileID[]
	>;
	[ServiceWorkerMessage.getPage]: HydrusMessageEvent<
		ServiceWorkerMessage.getPage,
		IBasePage["page_key"]
	>;
}

export interface HydrusMessageResponseMap {
	[ServiceWorkerMessage.search]: HydrusMessageEvent<ServiceWorkerMessage.search, FileID[]>;
	[ServiceWorkerMessage.getPagesList]: HydrusMessageEvent<
		ServiceWorkerMessage.getPagesList,
		(IBasePage | IDetailedPage)[]
	>;
	[ServiceWorkerMessage.getPage]: HydrusMessageEvent<ServiceWorkerMessage.getPage, IDetailedPage>;
	[ServiceWorkerMessage.getMetadata]: HydrusMessageEvent<
		ServiceWorkerMessage.getMetadata,
		ISimplifiedFileMetadata
	>;
}
