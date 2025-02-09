import { TaskRequestDTO, UsersTasksDTO } from 'src/task/task.dto';
import { GoalStatus, GoalType } from './goal.enums';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGoalDTO {
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
