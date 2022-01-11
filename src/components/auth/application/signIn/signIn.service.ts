import { Injectable } from '@nestjs/common';
import { SignInResponse } from './signIn.response';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignInService {
    constructor(
        private readonly jwtService: JwtService,
    ) { }

    async run(
        user: any
    ) {
        const payload = {
            username: user.username,
            sub: user.id,
        };

        return new SignInResponse(
            this.jwtService.sign(payload)
        );
    }
}
