export class UpdateTodoCommand {
	constructor(
		public readonly todoId: string,
		public readonly name: string,
		public readonly description: string,
		public readonly price: number,
	) { }
}
