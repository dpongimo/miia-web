import { Client } from "hydrus.js";

/** @type {Client} */
let client;

/** @type {String[]} */
let access_keys = [];


export function Connect(address, key) {
	// client = Client({ address: address, access_key: key });
	client = new Client({ address: address, key: key });
}

/** @returns {Client} */
export function GetClient(address) {
	if (!client || !!address) {
		client = new Client({ address: !!address ? address : "http://127.0.0.1:45869" });
	}
	return client;
}

export function GetKeys() {
	const localstorage_keys_json = localStorage.key("access_keys");
	if (!!localstorage_keys_json) {
		return JSON.stringify(localstorage_keys_json);
	} else {
		return [];
	}
}

export let required_permissions = [
	Client.prototype.PERMISSIONS.SEARCH_FILES,
	Client.prototype.PERMISSIONS.MANAGE_PAGES
]