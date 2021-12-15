import { FindAllUserResponse } from './findAllUser.response';
import { Inject, Injectable } from '@nestjs/common';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { UserRepository } from '../../domain/repositories/user.repository';
@Injectable()
export class FindAllUserService {
	constructor(
		@Inject('UserRepository') private userRepository: UserRepository,
	) { }

	async run() {
		const userList = await this.userRepository.find();

		return new FindAllUserResponse(userList)
	}
}
