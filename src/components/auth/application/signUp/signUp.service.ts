import { Injectable } from '@nestjs/common';
import { FindUserByUsernameService } from 'src/components/users/application/findByUsername/findUserByUsername.service';
import { InvalidCredentialsException } from '../../domain/exceptions/invalid-credentials.exception';
import * as bcrypt from 'bcrypt';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { CreateUserService } from 'src/components/users/application/create/createUser.service';

@Injectable()
export class SignUpService {
    constructor(
        private readonly createUserService: CreateUserService,
    ) { }

    async run(
        userId: Uuid,
        email: string,
        username: string,
        password: string,
        role: string,
    ) {
        await this.createUserService.run(
            userId,
            email,
            username,
            password,
            role,
        );
    }
}
