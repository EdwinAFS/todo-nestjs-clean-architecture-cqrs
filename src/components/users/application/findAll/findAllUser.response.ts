import { User } from '../../domain/models/User';

export class FindAllUserResponse {
	readonly user: Array<any>;

	constructor(user: Array<User>) {
		this.user = user.map((user) => user.toPrimitives());
	}
}
