import { Nullable } from 'src/shared/domain/Nullable';
import { Uuid } from 'src/shared/domain/value-object/Uuid';

export class User {
	readonly id: Uuid;
	readonly email: string;
	readonly username: string;
	readonly password: string;
	readonly role: string;
	readonly created_at: Date;
	readonly updated_at: Date;

	constructor(
		id: Uuid,
		email: string,
		username: string,
		password: string,
		role: string,
		created_at?: Date,
		updated_at?: Date,
	) {
		this.id = id;
		this.email = email;
		this.username = username;
		this.password = password;
		this.role = role;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	static toDomain(
		data: {
			id: string,
			email: string,
			username: string,
			password: string,
			role: string,
			created_at: Date,
			updated_at: Date,
		}
	): Nullable<User> {
		return new User(
			new Uuid(data.id),
			data.email,
			data.username,
			data.password,
			data.role,
			data.created_at,
			data.updated_at,
		);
	}

	toPrimitives() {
		return JSON.parse(JSON.stringify({
			id: this.id.toString(),
			email: this.email,
			username: this.username,
			password: this.password,
			role: this.role,
			created_at: this.created_at,
			updated_at: this.updated_at,
		}));
	}
}
