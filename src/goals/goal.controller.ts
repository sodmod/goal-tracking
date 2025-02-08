import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { GoalService } from './goal.service';
import { CreateGoalDTO, GoalDetailsDTO, GoalResponseDTO } from './goal.dto';

@Controller('goals')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @Post()
  async createGoal(@Body() createGoalDTO: CreateGoalDTO): Promise<string> {
    return await this.goalService.createGoalService(createGoalDTO);
  }

  @Get('user_goals/:email')
  async viewUsersAllGoals(
    @Param('email') email: string,
  ): Promise<GoalResponseDTO[]> {
    return await this.goalService.getAllUserGoals(email);
  }

  @Get('view/:goalId')
  async viewUserGoalDetails(
    @Param('goalId') goalId: number,
  ): Promise<GoalDetailsDTO> {
    return await this.goalService.viewUserGoalDetails(goalId);
  }
}
