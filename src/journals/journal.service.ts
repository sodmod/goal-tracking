import { Injectable } from '@nestjs/common';
import { GoalService } from 'src/goals/goal.service';
import { CreateJournalRequestDTO, ViewJournalDTO } from './journal.dto';
import { Journal } from './journal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class JournalService {
  constructor(
    private readonly goalService: GoalService,
    @InjectRepository(Journal)
    private readonly journalRepository: Repository<Journal>,
  ) {}

  async createJournal(
    createJournalRequestDTO: CreateJournalRequestDTO,
  ): Promise<void> {

    // find goal object 
    const goal = await this.goalService.findGoalById(
      createJournalRequestDTO.goalId,
    );

    //  define goal entity
    const journal = new Journal();
    journal.goal = goal;
    journal.content = createJournalRequestDTO.content;

    // save journal into repository
    await this.journalRepository.save(journal);
  }

  async viewAllJournal(goalId: number): Promise<ViewJournalDTO[] | null> {
    // get list of journal by a goal
    const journal = await this.journalRepository.findBy({
      goal: { id: goalId },
    });

    // convert journal entity to DTO
    return journal.map((journal) => ({
      id: journal.id,
      contents: journal.content,
      createdAt: journal.createdAt,
      updatedAt: journal.updatedAt,
    }));
  }
}
