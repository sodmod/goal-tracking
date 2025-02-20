import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

// create journal request dto
export class CreateJournalRequestDTO {
  @IsNumber()
  @IsNotEmpty()
  goalId: number;

  @IsString()
  @IsNotEmpty()
  content: string;
}

export class UpdateJournalRequestDTO {
  id: number;
  context: string;
}

// view journal dto
export class ViewJournalDTO {
  id: number;
  contents: string;
  createdAt: Date;
  updatedAt: Date;
}
