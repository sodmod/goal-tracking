import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// I am starting to build the application from scratch now,
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
