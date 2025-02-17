import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { taskDataSource } from 'src/db/db.configurations';

@Module({
  imports: [taskDataSource],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
