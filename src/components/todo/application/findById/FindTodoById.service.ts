import { FindTodoByIdResponse } from './FindTodoById.response';
import { Injectable } from '@nestjs/common';
import { Todo } from 'src/components/todo/domain/models/Todo';
import { TodoNotExist } from '../../domain/exceptions/TodoNotExist';
import { Uuid } from 'src/shared/domain/value-object/Uuid';

@Injectable()
export class FindTodoByIdService {
	constructor() {
		// repository and eventBus
	}

	async run(todoId: string) {
		const product = new Todo(new Uuid(todoId), "title", "description", "userId", new Date(), new Date());

		if (!product) {
			throw new TodoNotExist();
		}

		return new FindTodoByIdResponse(product);
	}
}
