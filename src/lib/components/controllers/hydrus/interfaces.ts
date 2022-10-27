import type { api_enums, responses } from "@dpongimo/async-hydrus.js/dist/esm/interfaces";

export type TagSearchQuery = (string | string[])[];
export type FileID = number;
export type PageKey = string;

/**
 * A condensed version of file metadata {@link FileMetadata} that can be stored in the local database
 */
export interface ISimplifiedFileMetadata {
	file_id: FileID;
	hash: string;
	size: number;
	mime: string;
	ext: string;
	width: number;
	height: number;
	deleted: boolean;
	/**
	 * @todo Might need to change this back to number
	 */
	time_modified: Date;
	/**
	 * Last time this file metadata was updated from the Hydrus Client
	 */
	last_queried: Date;
	urls: string[];
	/** All source tags from all tagging services */
	combined_tags: string[];
}

export interface IBasePage {
	name: string;
	page_key: string;
	page_type: api_enums.PageType;
	/** The index of this page, from left to right. If duplicates, the most-recently-queried page should be first */
	last_seen_page_position: number;
	/**
	 * Last time this page was updated from the Hydrus Client. This should only update when the file_ids are grabbed.
	 */
	last_queried: Date;
	/**
	 * First time this page was queried from the Hydrus Client
	 */
	first_queried: Date;
}

export interface IDetailedPage extends IBasePage {
	/**
	 * If undefined, this page still needs its info queried
	 */
	file_ids?: FileID[];
}

export interface ITagInformation {
	tag: string;
	display_name: string;
	observed_count: number;
}
