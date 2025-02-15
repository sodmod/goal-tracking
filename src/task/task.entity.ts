import {
  Column,
  Entity,
  ManyToOne,
} from 'typeorm';
import { TaskPriority, TaskStatus } from './task.enums';
import { Goal } from '../goals/goal.entity';
import { BaseEntity } from 'src/baseEntity.entity';

@Entity({ name: 'tasks' })
export class Task extends BaseEntity{

  @Column('text')
  title: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dueDate: Date;

  // todo: handle the comments section to be a table so that multiple users can comments to as group task
  @Column('text', { nullable: true })
  comments: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    // default: TaskStatus.IN_PROGRESS,
  })
  status: TaskStatus;

  @Column({
    type: 'enum',
    enum: TaskPriority,
  })
  priority: TaskPriority;

  @ManyToOne(() => Goal, { onDelete: 'CASCADE' })
  goal: Goal;
  
}
