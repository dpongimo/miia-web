import Dexie from "dexie";

export const db_name = "miia-cache";
export const metadata_table = "files";
export const db_version = 1;

/**
 * Dexie schema definition
 */
export const schema = {
	files: '&file_id, hash, *user_tags, *service_names_to_statuses_to_tags.all_known_tags'
}

/**  
 * @type {Dexie}
 * To aid SSR, this is only initialized on-demand
 * Servers can't have databases, what a dumb idea!
 */
let db;

export function GetDatabase() {
	if (!db) {
		db = new Dexie(db_name);
		db.version(db_version).stores(schema);
	}
	return db;
}

/**
 * @returns {Dexie.Table<object, Number>}
 */
export function GetMetadataTable() {
	if (!db) {
		db = new Dexie(db_name);
		db.version(db_version).stores(schema);
	}
	return db.files;
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
				const cleaned_key = dirty_key.split(' ').join('_');
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