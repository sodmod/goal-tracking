import { BaseEntity } from 'src/baseEntity.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity{
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

  @Column()
  password: string;
  
}
