import { BaseEntity } from "src/baseEntity.entity";
import { Goal } from "src/goals/goal.entity";
import { User } from "src/users/user.entity";
import { Entity, ManyToOne, OneToOne } from "typeorm";

@Entity({name: 'journals'})
export class Journal extends BaseEntity{

    id: number;

    @ManyToOne(()=> Goal, {onDelete: 'CASCADE', lazy: true})
    goal: Goal;

    createdAt: Date;
}