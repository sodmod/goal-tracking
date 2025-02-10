import { TaskRequestDTO, UsersTasksDTO } from 'src/task/task.dto';
import { GoalCategory, GoalStatus, GoalType } from './goal.enums';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGoalRequestDTO {
  @IsNotEmpty()
  @IsString()
  userEmail: string;

  @IsNotEmpty()
  title: string;

  description: string;
  status: GoalStatus;
  type: GoalType;
  startDate: Date;
  endDate: Date;
  task: TaskRequestDTO[];
}

export class GoalResponseDTO {
  id: number;
  title: string;
  status: GoalStatus;
  type: GoalType;
  description: string;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
}

export class GoalDetailsDTO {
  goalId: number;
  title: string;
  description: string;
  status: GoalStatus;
  type: GoalType;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
  tasks: UsersTasksDTO[];
}

export class UpdateGoalRequestDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  category: GoalCategory;
  @IsNotEmpty()
  status: GoalStatus;
  @IsNotEmpty()
  type: GoalType;
  startDate: Date;
  endDate: Date;
}
