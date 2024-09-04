import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  @Cron('* * * * *')
  handleCron() {
    console.log('This task runs every minute');
  }
}
