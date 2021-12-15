import {
    Body,
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseUUIDPipe,
    Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiController } from 'src/shared/infraestructure/ApiController';
import { FindAllUserQuery } from '../../application/findAll/findAllUser.query';
import { FindUserByIdQuery } from '../../application/findById/findUserById.query';
import { UpdateUserCommand } from '../../application/update/updateUser.command';
import { UserNotFoundException } from '../../domain/exceptions/user-not-found.exception';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController extends ApiController {
    @Get()
    async getAll() {
        return await this.queryBus.execute(new FindAllUserQuery());
    }

    @Get(':userId')
    async getOne(@Param('userId', ParseUUIDPipe) userId: string) {
        try {
            return await this.queryBus.execute(new FindUserByIdQuery(userId));
        } catch (error) {
            if (error instanceof UserNotFoundException) {
                throw new NotFoundException(error.message);
            }

            throw error;
        }
    }

    @Put(':userId')
    async update(
        @Param('userId', ParseUUIDPipe) userId: string,
        @Body() payload: UpdateUserDto
    ) {
        try {
            await this.commandBus.execute(
                new UpdateUserCommand(
                    userId,
                    payload.email,
                    payload.password,
                    payload.role
                ),
            );
        } catch (error) {
            if (error instanceof UserNotFoundException) {
                throw new NotFoundException(error.message);
            }

            throw error;
        }
    }
}
