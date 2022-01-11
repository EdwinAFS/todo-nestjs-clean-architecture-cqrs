import { User } from "../../domain/models/User";

export class FindUserByUsernameResponse {
	readonly user: any;

	constructor(user: User) {
		this.user = !!user ? user.toPrimitives() : null;
	}
}
