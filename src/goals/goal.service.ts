import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Goal } from './goal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGoalDTO, GoalDetailsDTO, GoalResponseDTO } from './goal.dto';
import { UserService } from 'src/users/user.service';
import { TaskService } from 'src/task/task.service';
import { UsersTasksDTO } from 'src/task/task.dto';
import { Task } from 'src/task/task.entity';

@Injectable()
export class GoalService {
  constructor(
    @InjectRepository(Goal) private readonly goalRepository: Repository<Goal>,
    private readonly userService: UserService,
    private readonly taskService: TaskService,
  ) {}

  // create a goal for a user
  async createGoalService(createGoalDTO: CreateGoalDTO): Promise<string> {
    // get the user info, get user info
    const user = await this.userService.getUserObject(createGoalDTO.userEmail);

    // create goal entity
    let goal = new Goal();
    goal.type = createGoalDTO.type;
    goal.title = createGoalDTO.title;
    goal.user = user;
    goal.description = createGoalDTO.description;
    // calculate if it is pending or not
    goal.status = createGoalDTO.status;
    goal.type = createGoalDTO.type;

    goal = await this.goalRepository.save(goal);

    // check if tasks is presend in the payload
    if (createGoalDTO.task) {
      if (createGoalDTO.task.length != 0) {
        const tasks: Task[] =
          this.taskService.convertMultipleTaskRequestDTOToTasks(
            createGoalDTO.task,
            goal,
          );
        await this.taskService.saveMultipleTasks(tasks);
      }
    }
    return 'goal created successfully';
  }

  // get list of goals for a user
  async getAllUserGoals(email: string): Promise<GoalResponseDTO[]> {
    const user = await this.userService.getUserObject(email);

    // get all goals for the user
    const goals = await this.goalRepository.find({
      where: { user: { id: user.id } },
    });

    return goals.map((goal) => ({
      id: goal.id,
      title: goal.title,
      status: goal.status,
      type: goal.type,
    }));
  }

  async viewUserGoalDetails(goalId: number): Promise<GoalDetailsDTO> {
    const goal = await this.findGoalById(goalId);

    const tasks: UsersTasksDTO[] | null = await this.taskService.getUserTasks(
      goal.id,
    );

    return {
      goalId: goal.id,
      title: goal.title,
      description: goal.description,
      status: goal.status,
      type: goal.type,
      startDate: goal.startDate,
      endDate: goal.endDate,
      createdAt: goal.createdAt,
      tasks,
    };
  }

  async findGoalById(id: number): Promise<Goal> {
    const goal = await this.goalRepository.findOne({ where: { id } });
    if (!goal) {
      throw new HttpException(
        `User with the id: ${id} can't be found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return goal;
  }
}
