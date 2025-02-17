import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/user.module';
import { ReminderProcessorService, ReminderService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { reminderDataSource } from 'src/db/db.configurations';

@Module({
  imports: [reminderDataSource, UserModule],
  providers: [ReminderService, ReminderProcessorService],
  exports: [ReminderService],
  controllers: [ReminderController],
})
export class ReminderModule {}
