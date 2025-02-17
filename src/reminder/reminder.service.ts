import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reminder } from './reminder.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/users/user.service';
import Redis from 'ioredis';
import { Worker } from 'bullmq';

@Injectable()
export class ReminderService {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(Reminder)
    private readonly reminderRepository: Repository<Reminder>,
  ) {}
}

@Injectable()
export class ReminderProcessorService {
  private woker: Worker;
  constructor(private readonly redisClient: Redis) {
    // listen to reminder que and run the job
    this.woker = new Worker(
      'reminder',
      async (job) => {
        console.log(
          `sending reminder to this user below ${job.data.userId}: ${job.data.message}`,
        );

        // implement sms or mail notification too
      },
      { connection: this.redisClient },
    );
  }
}
