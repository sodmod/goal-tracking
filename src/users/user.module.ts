import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userDataSource } from 'src/db/db.configurations';

@Module({
  imports: [userDataSource],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
