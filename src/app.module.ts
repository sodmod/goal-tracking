import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { GoalModule } from './goals/goal.module';
import { TaskModule } from './task/task.module';
import { ArchivedGoalModule } from './archivedGoal/archived-goal.module';
import { JournalModule } from './journals/journal.module';
import { dbConnectionPool } from './db/db.configurations';
import { RedisModule } from './redis/redis.module';
import { BullMqModule } from './bullmq/bull-mq.module';

@Module({
  imports: [
    dbConnectionPool,
    UserModule,
    GoalModule,
    TaskModule,
    ArchivedGoalModule,
    JournalModule,
    RedisModule,
    BullMqModule,
  ],
})
export class AppModule {}
