import {
	Body,
	Controller,
	Post,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
	@Post('/signup')
	signUp(@Body() payload: any) {
		return {
			message: 'signup',
			payload: payload,
		};
	}

	@Post('/signin')
	signIn(@Body() payload: any) {
		return {
			message: 'signin',
			payload: payload,
		};
	}
}
