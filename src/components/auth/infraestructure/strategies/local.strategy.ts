import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { ValidateCredentialsCommand } from "../../application/validateCredentials/validateCredentials.command";
import { InvalidCredentialsException } from "../../domain/exceptions/invalid-credentials.exception";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(readonly commandBus: CommandBus) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        try {
            const user = await this.commandBus.execute(
                new ValidateCredentialsCommand(username, password)
            );

            return user;

        } catch (error) {
            if (error instanceof InvalidCredentialsException) {
                throw new UnauthorizedException(error.message);
            }

            throw error;
        }
    }
}