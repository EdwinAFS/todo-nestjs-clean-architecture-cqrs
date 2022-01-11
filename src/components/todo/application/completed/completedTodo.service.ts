import { Inject, Injectable } from '@nestjs/common';
import { Todo } from 'src/components/todo/domain/models/Todo';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { TodoNotFoundException } from '../../domain/exceptions/todo-not-found.exception';
import { TodoRepository } from '../../domain/repositories/Todo.repository';

@Injectable()
export class CompletedTodoService {
	constructor(
		@Inject('TodoRepository') private todoRepository: TodoRepository,
	) { }

	async run(
		todoId: Uuid
	): Promise<void> {

		const todo: Todo = await this.todoRepository.findById(todoId);

		if (!todo) {
			throw new TodoNotFoundException(todoId.toString());
		}

		await this.todoRepository.completed(todo.id, !todo.completed)
	}
}
