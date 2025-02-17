import { BaseEntity } from 'src/baseEntity.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'reminder' })
export class Reminder extends BaseEntity {
  @Column()
  message: string;

  @Column({ type: 'timestamp' })
  remindAt: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE', lazy: true })
  user: User;
}
