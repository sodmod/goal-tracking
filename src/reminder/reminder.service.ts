import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reminder } from './reminder.entity';
import { Repository } from 'typeorm';
import Redis from 'ioredis';
import { Worker } from 'bullmq';
import { SetReminderRequestDTO } from './reminder.dto';
import { BullMQService } from 'src/bullmq/bull-mq.service';

@Injectable()
export class ReminderService {
  constructor(
    private readonly bullService: BullMQService,
    @InjectRepository(Reminder)
    private readonly reminderRepository: Repository<Reminder>,
  ) {}

  async setReminder(
    setReminderRequestDTO: SetReminderRequestDTO,
  ): Promise<void> {
    console.log("set reminder")
    this.bullService.addReminderJob({
      userId: setReminderRequestDTO.userId,
      message: setReminderRequestDTO.message,
      timestamp: setReminderRequestDTO.timestamp,
    });
  }
}


@Injectable()
export class ReminderProcessorService {
  private woker: Worker;
  constructor(@Inject('REDIS_CLIENT') private readonly redisClient: Redis) {
    // listen to reminder que and run the job
    this.woker = new Worker(
      'reminders',
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
