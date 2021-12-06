import { Todo } from '../../domain/models/Todo';

export class FindTodoByIdResponse {
	readonly todo: any;

	constructor(todo: Todo) {
		this.todo = todo.toPrimitives();
	}
}
