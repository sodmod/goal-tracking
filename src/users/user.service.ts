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
      throw new HttpException('User already Exist', HttpStatus.FOUND);
    }

    // create User entity
    const user = new User();
    user.firstname = registerUserDTO.firstname;
    user.lastname = registerUserDTO.lastname;
    user.othername = registerUserDTO.othername;
    user.email = registerUserDTO.email;
    user.password = registerUserDTO.password;

    // save user
    await this.userRepository.save(user);

    console.log('user created successfully');

    return 'success';
  }

  public async getUserObject(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('NOT FOUNT', HttpStatus.NOT_FOUND);
    } else {
      return user;
    }
  }

  private async userAlreadyExist(email: string): Promise<boolean> {
    return this.userRepository.exists({ where: { email: email } });
  }
}
