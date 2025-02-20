import { Module } from '@nestjs/common';
import { BullMQService } from './bull-mq.service';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [RedisModule],
  providers: [BullMQService],
  exports: [BullMQService],
})
export class BullMqModule {}
