import { Queue } from 'bullmq';
import { Inject, Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class BullMQService {
  private queue: Queue;

  constructor(
    @Inject('REDIS_CLIENT') private readonly redisClient: Redis, // Use global Redis client
  ) {
    // Initialize the BullMQ queue with the Redis connection
    this.queue = new Queue('reminders', {
      connection: this.redisClient,
    });
  }

  // add a reminder job
  async addReminderJob(userId: string, message: string, timestamp: number) {
    // Calculate delay in milliseconds
    const delay = timestamp - Date.now();
    if (delay <= 0) return; // If time has passed, don't schedule the job

    // Add a job to the queue for a reminder
    await this.queue.add('sendReminder', { userId, message }, { delay });
  }
}
