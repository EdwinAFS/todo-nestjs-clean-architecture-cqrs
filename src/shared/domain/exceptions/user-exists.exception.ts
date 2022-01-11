export class UserExistsException extends Error {
	constructor(username: string) {
		super(`User ${username} already exists`);
	}
}
