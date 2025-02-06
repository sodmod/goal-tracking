import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goal } from './goal.entity';
import { GoalService } from './goal.service';
import { GoalController } from './goal.controller';
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Goal]), UserModule],
  providers: [GoalService],
  exports: [GoalService],
  controllers: [GoalController],
})
export class GoalModule {}
