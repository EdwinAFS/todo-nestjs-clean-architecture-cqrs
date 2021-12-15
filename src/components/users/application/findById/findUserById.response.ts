import { User } from "../../domain/models/User";

export class FindUserByIdResponse {
	readonly user: any;

	constructor(user: User) {
		this.user = user.toPrimitives();
	}
}
