import { Injectable } from '@nestjs/common';
import { Todo } from 'src/components/todo/domain/models/Todo';

@Injectable()
export class CreateTodoService {
	constructor() {
		// repository and eventBus
	}

	async run(
		todoId: string,
		name: string,
		description: string,
		price: number,
	): Promise<void> {
		const todo = new Todo(todoId, name, description, price);
		console.log('create-todo.service', todo);
	}
}
