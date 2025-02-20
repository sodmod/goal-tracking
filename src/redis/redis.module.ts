import Redis from 'ioredis';
import { RedisService } from './redis.service';
import { Global, Module } from '@nestjs/common';

@Global() // Makes this module globally available across your application
@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT', 
      useFactory: () => {
        return new Redis({
          host: '172.29.84.119',
          port: 6379,
          maxRetriesPerRequest: null,
        });
      },
    },
    RedisService,
  ],
  exports: ['REDIS_CLIENT', RedisService],
})
export class RedisModule {}
