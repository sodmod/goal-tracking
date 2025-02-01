import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Goal } from '../goals/goal.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  othername: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Goal, (goal) => goal.user)
  goals: Goal[];
}
