import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Goal } from './goals/goal.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Passw0rd',
      database: 'goal_tracking',
      entities: [User, Goal],
      synchronize: true,
      logging: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
