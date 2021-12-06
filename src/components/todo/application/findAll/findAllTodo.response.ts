import { Todo } from '../../domain/models/Todo';

export class FindAllTodoResponse {
	readonly todo: Array<any>;

	constructor(todo: Array<Todo>) {
		this.todo = todo.map((todo) => todo.toPrimitives());
	}
}
