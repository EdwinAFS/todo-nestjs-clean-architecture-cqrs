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

	@Put(':userId')
	update(@Param('userId') userId: number, @Body() payload: any) {
		return {
			userId: userId,
			message: 'USER_UPDATED',
			payload: payload,
		};
	}
}
