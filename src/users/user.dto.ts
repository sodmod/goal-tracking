import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterUserDTO {
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  othername: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
