import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDTO, TaskRequestDTO, UsersTasksDTO } from './task.dto';
import { Goal } from 'src/goals/goal.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  async saveTasks(createTaskDTO: CreateTaskDTO): Promise<void> {
    const task = new Task();

    task.title = createTaskDTO.title;
    task.comments = createTaskDTO.comments;
    task.status = createTaskDTO.status;
    task.priority = createTaskDTO.priority;
    task.goal = createTaskDTO.goal;

    this.taskRepository.save(task);
    return;
  }

  async saveMultipleTasks(tasks: Task[]): Promise<void> {
    if (tasks.length == 0) {
      throw new HttpException('no content', HttpStatus.NO_CONTENT);
    }
    await this.taskRepository.save(tasks);
  }

  async getUserTasks(goalId: number): Promise<UsersTasksDTO[] | null> {
    const tasks = await this.taskRepository.findBy({ goal: { id: goalId } });

    return tasks.map((task) => ({
      id: task.id,
      title: task.title,
      comments: task.comments,
      status: task.status,
      priority: task.priority,
      createdAt: task.createdAt,
      dueDate: task.dueDate,
    }));
  }

  convertMultipleTaskRequestDTOToTasks(
    multipleTaskRequestDTO: TaskRequestDTO[],
    goal: Goal,
  ): Task[] {
    return multipleTaskRequestDTO.map((taskDTO) => {
      const task = new Task();
      task.title = taskDTO.title;
      task.comments = taskDTO.comments;
      task.status = taskDTO.status;
      task.dueDate = taskDTO.dueDate;
      task.priority = taskDTO.priority;
      task.goal = goal;
      return task;
    });
  }
}
