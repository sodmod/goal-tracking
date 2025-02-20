import { BaseEntity } from 'src/baseEntity.entity';
import { Goal } from 'src/goals/goal.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'journals' })
export class Journal extends BaseEntity {
  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => Goal, { onDelete: 'CASCADE', lazy: true })
  goal: Goal;
}
