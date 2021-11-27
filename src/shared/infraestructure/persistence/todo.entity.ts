import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Todo extends BaseEntity {

    @PrimaryColumn()
    id: string

    @Column({ type: "varchar" })
    title: string

    @Column()
    description: string

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date

    @CreateDateColumn({ type: 'timestamp' })
    updated_at: Date
}