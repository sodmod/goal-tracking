import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Goal } from './goals/goal.entity';
import { Task } from './task/task.entity';
import { ArchivedGoal } from './archivedGoal/archived-goal.entity';
import { GoalModule } from './goals/goal.module';
import { TaskModule } from './task/task.module';
import { ArchivedGoalModule } from './archivedGoal/archived-goal.module';
import { Journal } from './journals/journal.entity';
import { JournalModule } from './journals/journal.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.29.84.119',
      port: 5432,
      username: 'admin',
      password: 'sodmod1999',
      database: 'goal-tracking',
      entities: [User, Goal, Task, ArchivedGoal, Journal],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    GoalModule,
    TaskModule,
    ArchivedGoalModule,
    JournalModule,
  ],
})
export class AppModule {}
