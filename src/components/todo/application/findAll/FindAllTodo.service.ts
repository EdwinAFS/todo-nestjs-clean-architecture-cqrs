import { FindAllTodoResponse } from './FindAllTodo.response';
import { Injectable } from '@nestjs/common';
import { Todo } from 'src/components/todo/domain/models/Todo';

@Injectable()
export class FindAllTodoService {
	constructor() {
		// repository and eventBus
	}

	async run() {
		const todo = [new Todo('1', 'test', 'test', 123123)];
		return new FindAllTodoResponse(todo);
	}
}
