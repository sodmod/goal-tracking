import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArchivedGoal } from './archived-goal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArchivedGoalService {
  constructor(
    @InjectRepository(ArchivedGoal)
    private readonly archivedGoalRepository: Repository<ArchivedGoal>,
  ) {}
}
