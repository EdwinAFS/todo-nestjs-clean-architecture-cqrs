import { Injectable } from '@nestjs/common';
import { FindUserByUsernameService } from 'src/components/users/application/findByUsername/findUserByUsername.service';
import { InvalidCredentialsException } from '../../domain/exceptions/invalid-credentials.exception';
import { ValidateCredentialsResponse } from './validateCredentials.response';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ValidateCredentialsService {
    constructor(
        private readonly findUserByUsernameService: FindUserByUsernameService,
    ) { }

    async run(
        username: string,
        password: string
    ) {
        const { user } = await this.findUserByUsernameService.run(
            username
        );

        if (!user) {
            throw new InvalidCredentialsException();
        }

        if (!await this.checkPassword(password, user.password)) {
            throw new InvalidCredentialsException();
        }

        return new ValidateCredentialsResponse(user);
    }

    private async checkPassword(password: string, passworDB: string): Promise<boolean> {
        return await bcrypt.compare(password, passworDB);
    }
}
