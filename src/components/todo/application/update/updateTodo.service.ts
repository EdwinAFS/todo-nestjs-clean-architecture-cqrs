import { Inject, Injectable } from '@nestjs/common';
import { Todo } from 'src/components/todo/domain/models/Todo';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { TodoNotFoundException } from '../../domain/exceptions/todo-not-found.exception';
import { TodoRepository } from '../../domain/repositories/Todo.repository';

@Injectable()
export class UpdateTodoService {
	constructor(
		@Inject('TodoRepository') private todoRepository: TodoRepository,
	) { }

	async run(
		todoId: Uuid,
		title: string,
		description: string,
		userId: string
	): Promise<void> {

		const todo = await this.todoRepository.findById(todoId);

		if (!todo) {
			throw new TodoNotFoundException(todoId.toString());
		}

		await this.todoRepository.update(todo.id, new Todo(todo.id, title, description, userId))
	}
}
