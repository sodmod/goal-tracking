import { Goal } from 'src/goals/goal.entity';
import { TaskPriority, TaskStatus } from './task.enums';

export class TaskRequestDTO implements Omit<CreateTaskDTO, 'goal'> {
  title: string;
  comments: string;
  status: TaskStatus;
  dueDate: Date;
  priority: TaskPriority;
}

export class CreateTaskDTO {
  goal: Goal;
  title: string;
  comments: string;
  dueDate: Date;
  status: TaskStatus;
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
