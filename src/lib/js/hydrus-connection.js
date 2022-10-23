import { Hydrus as Client, Permissions } from "@dpongimo/async-hydrus.js";

/** @type {Client} */
let client;

/** @type {String[]} */
let access_keys = [];

export const image_mimes = ["image/jpg", "image/png", "image/gif"];

export const required_permissions = [
	Permissions.SEARCH_FILES,
	Permissions.MANAGE_PAGES
];

/**
 * @param {string} mime
 */
export function IsMIMEAllowed(mime) {
	return image_mimes.includes(mime);
}

/** @returns {Client} */
export function Connect(address, key) {
	// client = Client({ address: address, access_key: key });
	const param = { address: address ? address : GetCachedAddress() };
	param.key = key ? key : GetCachedKey();
	client = new Client(param);
	client.fetch = fetch;
	return client;
}

/** @returns {Client} */
export function GetClient(address = undefined, key = undefined) {
	if (address || key || !client) {
		Connect(address, key);
	}
	return client;
}

/** @returns {String} */
export function GetCachedAddress() {
	try {
		return JSON.parse(localStorage.getItem("address"));
	} catch (error) {
		return Client.default_api_address;
	}
}

/** @returns {String} */
export function GetCachedKey() {
	try {
		return JSON.parse(localStorage.getItem("access_key"));
	} catch (error) {
		return undefined;
	}
}
