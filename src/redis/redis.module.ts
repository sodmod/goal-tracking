import Redis from 'ioredis';
import { RedisService } from './redis.service';
import { Global, Module } from '@nestjs/common';

@Global() // Makes this module globally available across your application
@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT', // Register a global Redis client
      useFactory: () => {
        return new Redis({
          host: '172.29.84.119', // Your Redis host
          port: 6379, // Your Redis port
        });
      },
    },
    RedisService, // Create a service to handle Redis actions if needed
  ],
  exports: ['REDIS_CLIENT', RedisService], // Export for global use
})
export class RedisModule {}
