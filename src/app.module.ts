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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Passw0rd',
      database: 'goal_tracking',
      entities: [User, Goal, Task, ArchivedGoal],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    GoalModule,
    TaskModule,
    ArchivedGoalModule,
  ],
})
export class AppModule {}
