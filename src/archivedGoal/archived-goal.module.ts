import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArchivedGoal } from './archived-goal.entity';
import { ArchivedGoalService } from './archived-goal.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArchivedGoal])],
  providers: [ArchivedGoalService],
  exports: [ArchivedGoalService],
})
export class ArchivedGoalModule {}
