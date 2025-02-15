import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
    updatedAt: Date;
}