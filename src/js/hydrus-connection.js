import { Client } from "async-hydrus.js";

/** @type {Client} */
let client;

/** @type {String[]} */
let access_keys = [];


export function Connect(address, key) {
	// client = Client({ address: address, access_key: key });
	const param = { address: !!address ? address : GetCachedAddress() };
	param.key = !!key ? key : GetCachedKey();
	client = new Client(param);
	return client;
}

/** @returns {Client} */
export function GetClient(address = undefined, key = undefined) {
	if (!client) {
		Connect(address, key);
	}
	// client.fetch = window.fetch;
	return client;
}

export function GetCachedAddress() {
	try {
		return JSON.parse(localStorage.getItem("address"));
	} catch (error) {
		return Client.prototype.default_api_address;

	}
}
export function GetCachedKey() {
	try {
		return JSON.parse(localStorage.getItem("access_key"));
	} catch (error) {
		return undefined;
	}
}

export let required_permissions = [
	Client.prototype.PERMISSIONS.SEARCH_FILES,
	Client.prototype.PERMISSIONS.MANAGE_PAGES
]