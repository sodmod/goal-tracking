import { Module } from '@nestjs/common';
import { GoalService } from './goal.service';
import { GoalController } from './goal.controller';
import { UserModule } from 'src/users/user.module';
import { TaskModule } from 'src/task/task.module';
import { goalDataSource } from 'src/db/db.configurations';

@Module({
  imports: [goalDataSource, UserModule, TaskModule],
  providers: [GoalService],
  exports: [GoalService],
  controllers: [GoalController],
})
export class GoalModule {}
