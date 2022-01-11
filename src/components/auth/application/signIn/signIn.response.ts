export class SignInResponse {
	readonly access_token: any;

	constructor(access_token: string) {
		this.access_token = access_token;
	}
}
