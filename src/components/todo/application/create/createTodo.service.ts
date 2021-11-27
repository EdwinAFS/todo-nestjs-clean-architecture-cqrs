import { Injectable } from '@nestjs/common';
import { Todo } from 'src/components/todo/domain/models/Todo';

@Injectable()
export class CreateTodoService {
	constructor() {
		// repository and eventBus
	}

	async run(
		id: string,
		title: string,
		description: string,
		created_at: Date,
		updated_at: Date,
	): Promise<void> {
		const todo = new Todo(id, title, description, created_at, updated_at);
		console.log('create-todo.service', todo);
	}
}
