import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Goal } from './goal.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GoalService {
  constructor(
    @InjectRepository(Goal) private readonly goalRepository: Repository<Goal>,
  ) {}
}
