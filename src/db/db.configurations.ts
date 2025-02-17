import { TypeOrmModule } from '@nestjs/typeorm';
import { ArchivedGoal } from 'src/archivedGoal/archived-goal.entity';
import { Goal } from 'src/goals/goal.entity';
import { Journal } from 'src/journals/journal.entity';
import { Reminder } from 'src/reminder/reminder.entity';
import { Task } from 'src/task/task.entity';
import { User } from 'src/users/user.entity';

// establish connection into the db
export const dbConnectionPool = TypeOrmModule.forRoot({
  type: 'postgres',
  host: '172.29.84.119',
  port: 5432,
  username: 'admin',
  password: 'sodmod1999',
  database: 'goal-tracking',
  entities: [User, Goal, Task, ArchivedGoal, Journal, Reminder],
  synchronize: true,
  logging: true,
});

// goal datasource
export const goalDataSource = TypeOrmModule.forFeature([Goal]);

// task datasource
export const taskDataSource = TypeOrmModule.forFeature([Task]);

// user datasource
export const userDataSource = TypeOrmModule.forFeature([User]);

// journal datasource
export const journalDataSource = TypeOrmModule.forFeature([Journal]);

// reminder datasource
export const reminderDataSource = TypeOrmModule.forFeature([Reminder]);

export const archivedGoalDataSource = TypeOrmModule.forFeature([ArchivedGoal]);
