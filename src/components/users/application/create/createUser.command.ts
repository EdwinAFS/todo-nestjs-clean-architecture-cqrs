export class CreateUserCommand {
	constructor(
		public readonly userId: string,
		public readonly email: string,
		public readonly username: string,
		public readonly password: string,
		public readonly role: string
	) { }
}