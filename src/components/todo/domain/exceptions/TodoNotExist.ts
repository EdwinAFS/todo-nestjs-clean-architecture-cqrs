export class TodoNotExist extends Error {
	constructor() {
		super('To-do does not exists');
	}
}
