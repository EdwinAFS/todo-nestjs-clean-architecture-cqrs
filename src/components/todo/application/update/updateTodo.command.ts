export class UpdateTodoCommand {
	constructor(
		public readonly id: string,
		public readonly title: string,
		public readonly description: string,
		public readonly created_at: Date,
		public readonly updated_at: Date,
	) { }
}
