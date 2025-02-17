import { Module } from '@nestjs/common';
import { ArchivedGoalService } from './archived-goal.service';
import { archivedGoalDataSource } from 'src/db/db.configurations';

@Module({
  imports: [archivedGoalDataSource],
  providers: [ArchivedGoalService],
  exports: [ArchivedGoalService],
})
export class ArchivedGoalModule {}
