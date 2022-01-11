import { Nullable } from "src/shared/domain/Nullable";
import { Uuid } from "src/shared/domain/value-object/Uuid";
import { Todo } from "../models/Todo";

export interface TodoRepository {
    save: (todo: Todo) => Promise<void>;
    findById: (id: Uuid) => Promise<Nullable<Todo>>;
    findByUserId: (userId: Uuid) => Promise<Todo[]>;
    update: (id: Uuid, todo: Todo) => Promise<void>;
    completed: (id: Uuid, completed: boolean) => Promise<void>;
}
