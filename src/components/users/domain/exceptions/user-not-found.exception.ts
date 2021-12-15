export class UserNotFoundException extends Error {
	constructor(id: string) {
		super(`User ${id} does not exists`);
	}
}
