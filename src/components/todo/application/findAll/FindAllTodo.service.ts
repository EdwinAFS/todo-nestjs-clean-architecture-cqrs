import { FindAllTodoResponse } from './FindAllTodo.response';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../../domain/models/Todo';
import { TodoEntity } from '../../../../shared/infraestructure/persistence/todo.entity';
@Injectable()
export class FindAllTodoService {
	constructor(@InjectRepository(TodoEntity) private todoRepository: Repository<TodoEntity>) {
		// repository and eventBus
	}

	async run() {
		const todoList = await this.todoRepository.find();

		return new FindAllTodoResponse(todoList.map(item => Todo.toDomain(item)))
	}
}
