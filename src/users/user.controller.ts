import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * todo: This method will will be moved to auth module later
   * */
  @Post()
  async createUser(@Body() registerUserDTO: RegisterUserDTO): Promise<string> {
    console.log('creating users');
    return await this.userService.createUser(registerUserDTO);
  }
}
