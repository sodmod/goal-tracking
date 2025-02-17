import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redisClient: Redis, // Inject Redis client
  ) {}

  async set(key: string, value: any) {
    await this.redisClient.set(key, JSON.stringify(value), 'EX', 3600); // Set with expiration time (1 hour)
  }

  async get(key: string) {
    const data = await this.redisClient.get(key);
    return data ? JSON.parse(data) : null;
  }
}
