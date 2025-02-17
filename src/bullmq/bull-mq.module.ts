import { Module } from '@nestjs/common';
import { BullMQService } from './bull-mq.service';

@Module({
  providers: [BullMQService],
  exports: [BullMQService],
})
export class BullMqModule {}
