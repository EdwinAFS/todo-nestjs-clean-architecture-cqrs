import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Nullable } from "src/shared/domain/Nullable";
import { Uuid } from "src/shared/domain/value-object/Uuid";
import { TodoEntity } from "src/shared/infraestructure/persistence/todo.entity";
import { Repository } from "typeorm";
import { Todo } from "../../domain/models/Todo";
import { TodoRepository } from "../../domain/repositories/Todo.repository";

@Injectable()
export class TodoMysqlRepository implements TodoRepository {

    constructor(@InjectRepository(TodoEntity) private todoRepo: Repository<TodoEntity>) { }

    async save(todoToInsert: Todo): Promise<void> {
        const response = await this.todoRepo.save(todoToInsert.toPrimitives());
        console.log(response);
    }

    async findById(id: Uuid): Promise<Nullable<Todo>> {
        const todo = await this.todoRepo.findOne({ id: id.toString() });
        return todo ? Todo.toDomain(todo) : null;
    }

    async findByUserId(userId: Uuid): Promise<Todo[]> {
        const todo = await this.todoRepo.find({ userId: userId.toString() });
        return todo.map(item => Todo.toDomain(item));
    }

    async update(id: Uuid, todoToUpdate: Todo): Promise<void> {
        await this.todoRepo.update(id.toString(), todoToUpdate.toPrimitives())
    }

}