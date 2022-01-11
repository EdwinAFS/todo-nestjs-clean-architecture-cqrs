export class ValidateCredentialsCommand {
	constructor(
		public readonly username: string,
		public readonly password: string
	) { }
}
