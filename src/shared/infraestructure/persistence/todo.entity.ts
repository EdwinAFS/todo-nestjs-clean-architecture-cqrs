import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: 'todo' })
export class TodoEntity extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar" })
    title: string

    @Column()
    description: string

    @Column()
    userId: string

    @Column({
        default: false
    })
    completed: boolean

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updated_at: Date;

    @ManyToOne(() => UserEntity, user => user.todos)
    @JoinColumn({
        name: 'userId'
    })
    user: UserEntity;


}

