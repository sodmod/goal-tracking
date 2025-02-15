import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { GoalCategory, GoalStatus, GoalType } from './goal.enums';
import { BaseEntity } from 'src/baseEntity.entity';

@Entity({ name: 'goals' })
export class Goal extends BaseEntity {
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
