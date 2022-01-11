export class ValidateCredentialsResponse {
	readonly user: any;

	constructor(user: any) {
		const { password, ...result } = user;
		this.user = result;
	}
}
