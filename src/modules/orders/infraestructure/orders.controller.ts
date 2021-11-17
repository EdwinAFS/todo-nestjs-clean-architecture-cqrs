import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
	@Get()
	getAll() {
		return {
			message: 'ORDER_ALL',
		};
	}

	@Get(':orderId')
	getOne() {
		return {
			message: 'ORDER_ONE',
		};
	}

	@Post()
	create(@Body() payload: any) {
		return {
			message: 'ORDER_CREATED',
			payload: payload,
		};
	}

	@Put(':orderId')
	update(@Param('orderId') orderId: number, @Body() payload: any) {
		return {
			orderId: orderId,
			message: 'ORDER_UPDATED',
			payload: payload,
		};
	}

	@Delete(':orderId')
	delete(@Param('orderId') orderId: number) {
		return {
			orderId: orderId,
			message: 'ORDER_DELETED',
		};
	}
}
