import { Module } from '@nestjs/common';
import { GoalModule } from 'src/goals/goal.module';
import { JournalService } from './journal.service';
import { JournalController } from './journal.controller';
import { journalDataSource } from 'src/db/db.configurations';

@Module({
  imports: [journalDataSource, GoalModule],
  providers: [JournalService],
  exports: [JournalService],
  controllers: [JournalController],
})
export class JournalModule {}
