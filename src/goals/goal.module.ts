import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goal } from './goal.entity';
import { GoalService } from './goal.service';
import { GoalController } from './goal.controller';
import { UserModule } from 'src/users/user.module';
import { TaskModule } from 'src/task/task.module';

@Module({
  imports: [TypeOrmModule.forFeature([Goal]), UserModule, TaskModule],
  providers: [GoalService],
  exports: [GoalService],
  controllers: [GoalController],
})
export class GoalModule {}
