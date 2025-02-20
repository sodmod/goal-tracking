import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JournalService } from './journal.service';
import {
  CreateJournalRequestDTO,
  UpdateJournalRequestDTO,
  ViewJournalDTO,
} from './journal.dto';

@Controller('journal')
export class JournalController {
  constructor(private readonly journalService: JournalService) {}

  @Post()
  async creatJournal(
    @Body() createJournalRequestDTO: CreateJournalRequestDTO,
  ): Promise<void> {
    await this.journalService.createJournal(createJournalRequestDTO);
  }

  @Get('all/:goalId')
  async viewAllJournalByGoal(
    @Param('goalId') goalId: number,
  ): Promise<ViewJournalDTO[] | null> {
    return await this.journalService.viewAllJournalsByGoal(goalId);
  }

  @Put()
  async updateJournalById(
    @Body() updateJournalRequestDTO: UpdateJournalRequestDTO,
  ): Promise<void> {
    await this.journalService.updateJournalById(updateJournalRequestDTO);
  }

  @Delete(':id')
  async deleteJournalById(@Param('id') id: number): Promise<void> {
    return await this.journalService.deleteJournalById(id);
  }
}
