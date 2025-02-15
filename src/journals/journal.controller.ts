import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { JournalService } from './journal.service';
import { CreateJournalRequestDTO, ViewJournalDTO } from './journal.dto';

@Controller('journal')
export class JournalController {
  constructor(private readonly journalService: JournalService) {}

  @Post()
  async creatJournal(
    @Body() createJournalRequestDTO: CreateJournalRequestDTO,
  ): Promise<void> {
    await this.journalService.createJournal(createJournalRequestDTO);
  }

  @Get('all/:id')
  async viewAllJournal(
    @Param('goalId') goalId: number,
  ): Promise<ViewJournalDTO[] | null> {
    return await this.journalService.viewAllJournal(goalId);
  }
}
