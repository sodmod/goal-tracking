import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Journal } from './journal.entity';
import { GoalModule } from 'src/goals/goal.module';
import { JournalService } from './journal.service';
import { JournalController } from './journal.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Journal]), GoalModule],
  providers: [JournalService],
  exports: [JournalService],
  controllers: [JournalController],
})
export class JournalModule {}
