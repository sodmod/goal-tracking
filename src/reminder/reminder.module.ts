import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/user.module';
import { ReminderProcessorService, ReminderService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { reminderDataSource } from 'src/db/db.configurations';
import { BullMqModule } from 'src/bullmq/bull-mq.module';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [reminderDataSource, UserModule, BullMqModule, RedisModule],
  providers: [ReminderService, ReminderProcessorService],
  exports: [ReminderService],
  controllers: [ReminderController],
})
export class ReminderModule {}
