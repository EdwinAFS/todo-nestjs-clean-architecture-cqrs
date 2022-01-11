export class UserByUsernameNotFoundException extends Error {
	constructor(username: string) {
		super(`User ${username} does not exists`);
	}
}
