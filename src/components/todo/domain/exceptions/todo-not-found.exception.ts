export class TodoNotFoundException extends Error {
	constructor(id: string) {
		super(`Todo ${id} does not exists`);
	}
}
