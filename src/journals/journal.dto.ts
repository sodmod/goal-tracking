export class CreateJournalRequestDTO {
  goalId: number;
  content: string;
}

export class ViewJournalDTO {
  id: number;
  contents: string;
  createdAt: Date;
  updatedAt: Date;
}
