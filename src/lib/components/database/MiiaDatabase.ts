import Dexie from "dexie";
import type {
	IDetailedPage,
	ISimplifiedFileMetadata,
	FileID,
	ITagInformation
} from "../controllers/hydrus/interfaces.js";

export class MiiaDatabase extends Dexie {
	public static readonly version = 1;
	public static readonly db_name = "MiiaDatabase";
	public static readonly singleton: MiiaDatabase;
	pages!: Dexie.Table<IDetailedPage, string>;
	filedata!: Dexie.Table<ISimplifiedFileMetadata, FileID>;
	tags!: Dexie.Table<ITagInformation, string>;

	constructor() {
		super(MiiaDatabase.db_name);
		if (!MiiaDatabase.singleton) {
			(MiiaDatabase as { singleton: MiiaDatabase }).singleton = this;
		}
		this.version(MiiaDatabase.version).stores({
			pages: "page_key, name, first_queried, last_queried, last_seen_page_position",
			filedata: "file_id, &hash, size, time_modified, last_queried, *combined_tags",
			tags: "tag, observed_count"
		});
	}
}
