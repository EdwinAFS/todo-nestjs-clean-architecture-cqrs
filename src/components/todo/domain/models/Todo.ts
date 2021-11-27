import { Nullable } from 'src/shared/domain/Nullable';

export class Todo {
	readonly id: string;
	readonly title: string;
	readonly description: string;
	readonly created_at: Date;
	readonly updated_at: Date;

	constructor(
		id: string,
		title: string,
		description: string,
		created_at: Date,
		updated_at: Date,
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	static toDomain(
		id: string,
		title: string,
		description: string,
		created_at: Date,
		updated_at: Date,
	): Nullable<Todo> {
		return new Todo(
			id,
			title,
			description,
			created_at,
			updated_at,
		);
	}

	toPrimitives() {
		return {
			id: this.id,
			title: this.title,
			description: this.description,
			created_at: this.created_at,
			updated_at: this.updated_at,
		};
	}
}
