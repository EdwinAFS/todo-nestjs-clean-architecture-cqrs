import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Todo extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar" })
    title: string

    @Column()
    description: string

    @CreateDateColumn({ type: 'timestamptz', default: 'CURRENT_TIMESTAMP' })
    created_at: Date

    @UpdateDateColumn({ type: 'timestamptz', default: 'CURRENT_TIMESTAMP' })
    updated_at: Date
}