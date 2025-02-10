import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { GoalCategory, GoalStatus, GoalType } from './goal.enums';

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
    enum: GoalCategory,
    default: GoalCategory.PERSONAL_DEVELOPMENT,
  })
  category: GoalCategory;

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
  })
  startDate: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  endDate: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE', lazy: true })
  user: User;
}
