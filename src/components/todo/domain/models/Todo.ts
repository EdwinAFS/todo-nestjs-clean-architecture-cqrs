import { Nullable } from 'src/shared/domain/Nullable';
import { Uuid } from 'src/shared/domain/value-object/Uuid';

export class Todo {
	readonly id: Uuid;
	readonly title: string;
	readonly description: string;
	readonly userId: string;
	readonly completed: boolean;
	readonly created_at: Date;
	readonly updated_at: Date;

	constructor(
		id: Uuid,
		title: string,
		description: string,
		userId: string,
		completed?: boolean,
		created_at?: Date,
		updated_at?: Date,
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.userId = userId;
		this.completed = completed;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	static toDomain(
		data: {
			id: string,
			title: string,
			description: string,
			userId: string,
			completed: boolean,
			created_at: Date,
			updated_at: Date,
		}
	): Nullable<Todo> {
		return new Todo(
			new Uuid(data.id),
			data.title,
			data.description,
			data.userId,
			data.completed,
			data.created_at,
			data.updated_at,
		);
	}

	toPrimitives() {
		return JSON.parse(JSON.stringify({
			id: this.id.toString(),
			title: this.title,
			description: this.description,
			userId: this.userId,
			completed: this.completed,
			created_at: this.created_at,
			updated_at: this.updated_at,
		}));
	}
}
