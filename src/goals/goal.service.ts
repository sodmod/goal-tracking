import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Goal } from './goal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGoalDTO, GoalResponseDTO } from './goal.dto';
import { UserService } from 'src/users/user.service';

@Injectable()
export class GoalService {
  constructor(
    @InjectRepository(Goal) private readonly goalRepository: Repository<Goal>,
    private readonly userService: UserService,
  ) {}

  async createGoalService(createGoalDTO: CreateGoalDTO): Promise<string> {
    // get the user info, get user info
    const user = await this.userService.getUserObject(createGoalDTO.userEmail);

    // create goal entity
    const goal = new Goal();
    goal.type = createGoalDTO.type;
    goal.title = createGoalDTO.title;
    goal.user = user;
    goal.description = createGoalDTO.description;
    // calculate if it is pending or not
    goal.status = createGoalDTO.status;
    goal.type = createGoalDTO.type;

    await this.goalRepository.save(goal);
    // todo: implement task mapping

    return 'goal created successfully';
  }

  async getAllUserGoals(email: string): Promise<GoalResponseDTO[]> {
    const user = await this.userService.getUserObject(email);

    // get all goals for the user
    const goals = await this.goalRepository.find({ where: { user } });

    return goals.map((goal) => ({
      title: goal.title,
      status: goal.status,
      type: goal.type,
    }));
  }
}
