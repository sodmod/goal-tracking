import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterUserDTO } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(registerUserDTO: RegisterUserDTO): Promise<string> {
    const alreadyExist = await this.userAlreadyExist(registerUserDTO.email);

    if (alreadyExist) {
      throw new HttpException('Found', HttpStatus.FOUND);
    }

    // create User entity
    const user = new User();
    user.firstname = registerUserDTO.firstname;
    user.lastname = registerUserDTO.lastname;
    user.othername = registerUserDTO.othername;
    user.email = registerUserDTO.email;

    // save user
    await this.userRepository.save(user);

    console.log('user created successfully');

    return 'success';
  }

  private async userAlreadyExist(email: string): Promise<boolean> {
    return this.userRepository.exists({ where: { email: email } });
  }
}
