import { FindAllTodoResponse } from './findAllTodo.response';
import { Inject, Injectable } from '@nestjs/common';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { TodoRepository } from '../../domain/repositories/Todo.repository';
@Injectable()
export class FindAllTodoService {
	constructor(
		@Inject('TodoRepository') private todoRepository: TodoRepository,
	) { }

	async run(userId: Uuid) {
		const todoList = await this.todoRepository.findByUserId(userId);

		return new FindAllTodoResponse(todoList)
	}
}
