import { GoalStatus, GoalType } from './goal.enums';

export class CreateGoalDTO {
  userEmail: string;
  title: string;
  description: string;
  status: GoalStatus;
  type: GoalType;
  startDate: Date;
  endDate: Date;
}

export class GoalResponseDTO {
  title: string;
  status: GoalStatus;
  type: GoalType;
}
