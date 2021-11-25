import { FindTodoByIdResponse } from './FindTodoById.response';
import { Injectable } from '@nestjs/common';
import { Todo } from 'src/components/todo/domain/models/Todo';
import { TodoNotExist } from '../../domain/exceptions/TodoNotExist';

@Injectable()
export class FindTodoByIdService {
	constructor() {
		// repository and eventBus
	}

	async run(productId: string) {
		const product = new Todo(productId, 'test', 'test', 123123);

		if (!product) {
			throw new TodoNotExist();
		}

		return new FindTodoByIdResponse(product);
	}
}
