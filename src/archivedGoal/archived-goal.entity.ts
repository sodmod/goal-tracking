import { BaseEntity } from 'src/baseEntity.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'archived_goals' })
export class ArchivedGoal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  archivedAt: Date;

  @Column('text')
  note: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  users: User;
}
