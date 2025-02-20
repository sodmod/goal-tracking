import { Queue } from 'bullmq';
import { Inject, Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { addReminderJob } from './bull-mq.dto';

@Injectable()
export class BullMQService {
  private queue: Queue;

  constructor(
    @Inject('REDIS_CLIENT') private readonly redisClient: Redis,
  ) {
    // Initialize the BullMQ queue with the Redis connection
    this.queue = new Queue('reminders', {
      connection: this.redisClient,
    });
  }

  // add a reminder job
  async addReminderJob({ userId, message, timestamp }: addReminderJob) {

    console.log("bull-mq service add to redis")
    // Calculate delay in milliseconds
    // const delay = timestamp - Date.now();
    const delay = (Date.now()+10*60*1000) - Date.now();
    if (delay <= 0) return; // If time has passed, don't schedule the job

    console.log(`reminder will be delayed for ${delay}`);
    // Add a job to the queue for a reminder
    await this.queue.add('sendReminder', { userId, message }, { delay });

    console.log(`************** reminder set automatically with time ${delay} from now`)
  }
}
