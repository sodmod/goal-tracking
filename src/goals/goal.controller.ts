import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GoalService } from './goal.service';
import {
  CreateGoalRequestDTO,
  GoalDetailsDTO,
  GoalResponseDTO,
  UpdateGoalRequestDTO,
} from './goal.dto';
import { GoalStatus } from './goal.enums';

@Controller('goals')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @Post()
  async createGoal(
    @Body() createGoalDTO: CreateGoalRequestDTO,
  ): Promise<string> {
    return await this.goalService.createGoalService(createGoalDTO);
  }

  @Get('user_goals/:email')
  async viewUsersAllGoals(
    @Param('email') email: string,
  ): Promise<GoalResponseDTO[]> {
    return await this.goalService.getAllUserGoals(email);
  }

  @Get('goal-statuses')
  getAllGoalStatus(): GoalStatus[] {
    return this.goalService.getAllGoalStatus();
  }

  @Get('view/:goalId')
  async viewUserGoalDetails(
    @Param('goalId') goalId: number,
  ): Promise<GoalDetailsDTO> {
    return await this.goalService.viewUserGoalDetails(goalId);
  }

  // update goal
  @Put()
  async updateUsersGoal(
    @Body() updateGoalRequestDTO: UpdateGoalRequestDTO,
  ): Promise<void> {
    return await this.goalService.updateUserGoal(updateGoalRequestDTO);
  }

  @Delete(':id')
  async deleteGoal(@Param('id') id: number): Promise<void> {
    return await this.goalService.deleteGoal(id);
  }

  @Get('get-goal-tasks/:id')
  getGoalTasks(@Param('id') id: number): void {
    return;
  }
}
