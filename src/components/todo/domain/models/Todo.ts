import { Nullable } from 'src/shared/domain/Nullable';

export class Todo {
	readonly todoId: string;
	readonly name: string;
	readonly description: string;
	readonly price: number;

	constructor(
		todoId: string,
		name: string,
		description: string,
		price: number,
	) {
		this.todoId = todoId;
		this.name = name;
		this.description = description;
		this.price = price;
	}

	static toDomain(
		todoId: string,
		name: string,
		description: string,
		price: number,
	): Nullable<Todo> {
		return new Todo(todoId, name, description, price);
	}

	toPrimitives() {
		return {
			todoId: this.todoId,
			name: this.name,
			description: this.description,
			price: this.price,
		};
	}
}
