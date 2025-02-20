import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SetReminderRequestDTO {
  @IsString()
  @IsNotEmpty()
  userId: string;
  @IsString()
  message: string;
  @IsNumber()
  @IsNotEmpty()
  timestamp: number;
}
