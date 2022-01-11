import { FindUserByUsernameResponse } from './findUserByUsername.response';
import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';
import { UserByUsernameNotFoundException } from '../../domain/exceptions/user-by-username-not-found.exception';

@Injectable()
export class FindUserByUsernameService {
	constructor(@Inject('UserRepository') private userRepository: UserRepository,
	) { }

	async run(username: string) {
		const user = await this.userRepository.findByUsername(username);

		return new FindUserByUsernameResponse(user);
	}
}
