import { Goal } from 'src/goals/goal.entity';
import { TaskPriority, TaskStatus } from './task.enums';
import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';

export class TaskRequestDTO implements Omit<CreateTaskDTO, 'goal'> {
  title: string;
  comments: string;
  status: TaskStatus;
  dueDate: Date;
  priority: TaskPriority;
}

export class CreateTaskDTO {
  @IsNotEmptyObject()
  goal: Goal;

  @IsNotEmpty()
  title: string;

  comments: string;

  @IsNotEmpty()
  dueDate: Date;

  @IsNotEmpty()
  status: TaskStatus;

  @IsNotEmpty()
  priority: TaskPriority;
}

export class UsersTasksDTO {
  id: number;
  title: string;
  comments: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: Date;
  createdAt: Date;
}
