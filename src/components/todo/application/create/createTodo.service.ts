import { Inject, Injectable } from '@nestjs/common';
import { Todo } from 'src/components/todo/domain/models/Todo';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { TodoRepository } from '../../domain/repositories/Todo.repository';

@Injectable()
export class CreateTodoService {
	constructor(
		@Inject('TodoRepository') private todoRepository: TodoRepository
	) { }

	async run(
		todoId: Uuid,
		title: string,
		description: string,
		userId: string
	): Promise<void> {
		const todo = new Todo(todoId, title, description, userId);
		await this.todoRepository.save(todo);
	}
}
