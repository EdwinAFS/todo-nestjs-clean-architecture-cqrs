export class SignInCommand {
	constructor(
		public readonly id: string,
		public readonly email: string,
		public readonly username: string,
		public readonly role: string,
	) { }
}
