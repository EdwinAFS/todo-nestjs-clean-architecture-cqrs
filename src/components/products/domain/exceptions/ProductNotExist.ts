export class CoursesCounterNotExist extends Error {
	constructor() {
		super('The product does not exists');
	}
}
