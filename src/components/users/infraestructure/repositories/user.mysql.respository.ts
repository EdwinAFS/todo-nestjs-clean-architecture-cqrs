import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Nullable } from "src/shared/domain/Nullable";
import { Uuid } from "src/shared/domain/value-object/Uuid";
import { UserEntity } from "src/shared/infraestructure/persistence/user.entity";
import { Repository } from "typeorm";
import { User } from "../../domain/models/User";
import { UserRepository } from "../../domain/repositories/user.repository";

@Injectable()
export class UserMysqlRepository implements UserRepository {

    constructor(@InjectRepository(UserEntity) private userRepo: Repository<UserEntity>) { }

    async save(userToInsert: User): Promise<void> {
        const response = await this.userRepo.save(userToInsert.toPrimitives());
    }

    async findById(id: Uuid): Promise<Nullable<User>> {
        const user = await this.userRepo.findOne({ id: id.toString() });
        return user ? User.toDomain(user) : null;
    }

    async findByUsername(username: string): Promise<Nullable<User>> {
        const user = await this.userRepo.findOne({ username });
        return user ? User.toDomain(user) : null;
    }

    async find(): Promise<User[]> {
        const user = await this.userRepo.find();
        return user.map(item => User.toDomain(item));
    }

    async update(id: Uuid, userToUpdate: User): Promise<void> {
        await this.userRepo.update(id.toString(), userToUpdate.toPrimitives())
    }

    async create(userToCreate: User): Promise<void> {
        await this.userRepo.save(userToCreate.toPrimitives())
    }

}