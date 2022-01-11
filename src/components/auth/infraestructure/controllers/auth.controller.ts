import {
	BadRequestException,
	Body,
	Controller,
	Post,
	Req,
	UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserExistsException } from 'src/shared/domain/exceptions/user-exists.exception';
import { ApiController } from 'src/shared/infraestructure/ApiController';
import { SignInCommand } from '../../application/signIn/signIn.command';
import { SignUpCommand } from '../../application/signUp/signUp.command';
import { LocalAuthGuard } from '../../../../shared/infraestructure/guards/local-auth.guard';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@ApiTags('Authentication')
@Controller('api/v1/auth')
export class AuthController extends ApiController {

	@Post('/signup')
	async signUp(@Body() payload: SignUpDto) {
		try {
			await this.commandBus.execute(
				new SignUpCommand(
					payload.id,
					payload.email,
					payload.username,
					payload.password,
					payload.role,
				)
			);
		} catch (error) {
			if (error instanceof UserExistsException) {
				throw new BadRequestException(error.message);
			}

			throw error;
		}
	}

	@UseGuards(LocalAuthGuard)
	@Post('/signin')
	async signIn(@Body() singIn: SignInDto, @Req() payload) {

		const user = payload?.user?.user;

		return await this.commandBus.execute(
			new SignInCommand(
				user.id,
				user.email,
				user.username,
				user.role,
			),
		);
	}
}
