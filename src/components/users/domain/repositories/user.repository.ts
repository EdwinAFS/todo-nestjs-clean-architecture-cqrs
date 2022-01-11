import { Nullable } from "src/shared/domain/Nullable";
import { Uuid } from "src/shared/domain/value-object/Uuid";
import { User } from "../models/User";

export interface UserRepository {
    findById: (id: Uuid) => Promise<Nullable<User>>;
    findByUsername: (username: string) => Promise<Nullable<User>>;
    find: () => Promise<User[]>;
    update: (id: Uuid, user: User) => Promise<void>;
    create: (user: User) => Promise<void>;
}
