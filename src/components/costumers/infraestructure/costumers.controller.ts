import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';

@Controller('costumers')
export class CostumersController {
	@Get()
	getAll() {
		return {
			message: 'COSTUMER_ALL',
		};
	}

	@Get(':costumerId')
	getOne() {
		return {
			message: 'COSTUMER_ONE',
		};
	}

	@Post()
	create(@Body() payload: any) {
		return {
			message: 'COSTUMER_CREATED',
			payload: payload,
		};
	}

	@Put(':costumerId')
	update(@Param('costumerId') costumerId: number, @Body() payload: any) {
		return {
			costumerId: costumerId,
			message: 'COSTUMER_UPDATED',
			payload: payload,
		};
	}

	@Delete(':costumerId')
	delete(@Param('costumerId') costumerId: number) {
		return {
			costumerId: costumerId,
			message: 'COSTUMER_DELETED',
		};
	}
}
