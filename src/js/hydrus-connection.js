import { Client } from "hydrus.js";

/** @type {Client} */
let client;

export function Connect(address, key) {
	// client = Client({ address: address, access_key: key });
	client = new Client();
}

/** @returns {Client} */
export function GetClient() {
	if (!client) {
		return new Client();
	} else {
		return client;
	}
}