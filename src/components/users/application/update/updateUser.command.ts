export class UpdateUserCommand {
	constructor(
		public readonly userId: string,
		public readonly email: string,
		public readonly password: string,
		public readonly role: string
	) { }
}