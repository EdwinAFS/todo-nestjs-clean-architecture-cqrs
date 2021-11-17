import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
	@Get()
	getAll() {
		return {
			message: 'USER_ALL',
		};
	}

	@Get(':userId')
	getOne() {
		return {
			message: 'USER_ONE',
		};
	}

	@Post()
	create(@Body() payload: any) {
		return {
			message: 'USER_CREATED',
			payload: payload,
		};
	}

	@Put(':userId')
	update(@Param('userId') userId: number, @Body() payload: any) {
		return {
			userId: userId,
			message: 'USER_UPDATED',
			payload: payload,
		};
	}

	@Delete(':userId')
	delete(@Param('userId') userId: number) {
		return {
			userId: userId,
			message: 'USER_DELETED',
		};
	}
}
