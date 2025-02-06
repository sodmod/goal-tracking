import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { GoalStatus, GoalType } from './goal.enums';

@Entity({ name: 'goals' })
export class Goal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: GoalStatus,
    default: GoalStatus.IN_PROGRESS,
  })
  status: GoalStatus;

  @Column({
    type: 'enum',
    enum: GoalType,
  })
  type: GoalType;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  startDate: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  endDate: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;
}
