import Dexie from "dexie";
import { GetClient } from "./hydrus-connection.js";

export const db_name = `miia-cache`;
export const metadata_table = "files";
export const db_version = 1;
const METADATA_PAGINATION = 20;

/**
 * Dexie schema definition
 */
export const schema = {
	files: "&file_id, hash, *service_names_to_statuses_to_tags.all_known_tags"
	// files: '&file_id, hash'
};

/**
 * @type {Dexie}
 * To aid SSR, this is only initialized on-demand
 * Servers can't have databases, what a dumb idea!
 */
let db;

export function GetDatabase() {
	ensureDatabaseExists();
	return db;
}

/**
 * @returns {Dexie.Table<object, Number>}
 */
export function GetMetadataTable() {
	ensureDatabaseExists();
	return db.files;
}

function ensureDatabaseExists() {
	if (!db) {
		db = new Dexie(db_name);
		db.version(db_version).stores(schema);
	}
}

/**
 *
 * @param {Number} file_id
 */
export async function GetFileMetadata(file_id) {
	if (typeof file_id !== "number") {
		throw new EvalError("database::GetFileMetadata: file_id was not a number");
	}

	try {
		return await GetMetadataTable().get({ file_id });
	} catch (error) {
		console.error(`Failed to get file metadata from db ${file_id}`, error);
	}
}

/**
 * Gets the requested file_ids metadata from the hydrus client
 * Saves data to the `GetMetadataTable`
 *
 * @param {string[]} file_ids_to_search
 */
export async function syncMetadata(file_ids_to_search) {
	const client = GetClient();
	const files = GetMetadataTable();

	for (
		let start_index = 0;
		start_index < file_ids_to_search.length;
		start_index += METADATA_PAGINATION
	) {
		const file_id_subset = file_ids_to_search.slice(
			start_index,
			Math.min(start_index + METADATA_PAGINATION, file_ids_to_search.length)
		);
		const { metadata: ref_metadata } = await client.get_file_metadata({
			file_ids: file_id_subset
		});

		const metadata = [];
		for (const this_metadata of ref_metadata) {
			metadata.push(cleanMetadata(this_metadata));
		}

		await files.bulkPut(metadata);
	}
}

/**
 * Cleans the hydrus metadata json to not use dirty, dirty spaces in its keys
 *
 * @param {Object} metadata This does not create a copy and instead modifies the `metadata` object reference passed in
 */
export function cleanMetadata(metadata) {
	if ("service_names_to_statuses_to_tags" in metadata) {
		const tag_obj = metadata["service_names_to_statuses_to_tags"];
		for (const dirty_key in tag_obj) {
			if (tag_obj.hasOwnProperty(dirty_key)) {
				// Replace those dirty, dirty spaces with underscores
				const cleaned_key = dirty_key.split(" ").join("_");
				// Concat the array from an object into a real js array
				tag_obj[cleaned_key] = concatHydrusArray(tag_obj[dirty_key]);
				delete tag_obj[dirty_key];
			}
		}
		// Make sure our altered object is applied to the source
		metadata["service_names_to_statuses_to_tags"] = tag_obj;
	}

	return metadata;
}

/**
 * Hydrus client API arrays are sometimes paginated objects
 * Though useful for some people, we're parsing everything here
 *
 * @param {Object} hydrus_arr
 */
export function concatHydrusArray(hydrus_arr) {
	/**
	 * @type {Array}
	 */
	let new_tag_arr = [];
	for (const key in hydrus_arr) {
		if (hydrus_arr.hasOwnProperty(key)) {
			new_tag_arr = new_tag_arr.concat(hydrus_arr[key]);
		}
	}
	return new_tag_arr;
}
