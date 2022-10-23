export class MiiaWebError extends Error {
	public override name = "MiiaWebError";
	constructor(message: string, context?: unknown) {
		super(message);
		if (context instanceof Error) {
			this.stack = context.stack;
		}
	}
}
