import { TaskRequestDTO, UsersTasksDTO } from 'src/task/task.dto';
import { GoalStatus, GoalType } from './goal.enums';

export class CreateGoalDTO {
  userEmail: string;
  title: string;
  description: string;
  status: GoalStatus;
  type: GoalType;
  startDate: Date;
  endDate: Date;
  task: TaskRequestDTO[];
}

export class GoalResponseDTO {
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
