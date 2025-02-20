import { Body, Controller, Post } from '@nestjs/common';
import { SetReminderRequestDTO } from './reminder.dto';
import { ReminderService } from './reminder.service';

@Controller('reminder')
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}

  @Post()
  setReminder(@Body() setReminderRequestDTO: SetReminderRequestDTO) {
    this.reminderService.setReminder(setReminderRequestDTO);
  }
}
