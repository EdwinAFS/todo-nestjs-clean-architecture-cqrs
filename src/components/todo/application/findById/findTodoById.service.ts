import { FindTodoByIdResponse } from './findTodoById.response';
import { Inject, Injectable } from '@nestjs/common';
import { Todo } from 'src/components/todo/domain/models/Todo';
import { TodoNotFoundException } from '../../domain/exceptions/todo-not-found.exception';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { TodoRepository } from '../../domain/repositories/Todo.repository';

@Injectable()
export class FindTodoByIdService {
	constructor(@Inject('TodoRepository') private todoRepository: TodoRepository,
	) { }

	async run(todoId: Uuid) {
		const todo = await this.todoRepository.findById(todoId);

		if (!todo) {
			throw new TodoNotFoundException(todoId.toString());
		}

		return new FindTodoByIdResponse(todo);
	}
}
