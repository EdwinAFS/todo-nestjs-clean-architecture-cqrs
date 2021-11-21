import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Injectable()
export class ApiController {
	constructor(readonly commandBus: CommandBus, readonly queryBus: QueryBus) {}
}
