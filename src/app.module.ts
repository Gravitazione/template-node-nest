import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from './modules/user/user.module'
import { TransactionService } from './modules/transaction/services/transaction.service'
import { TransactionController } from './modules/transaction/controllers/transaction.controller'
import { TransactionModule } from './modules/transaction/transaction.module'
import { TasksModule } from './tasks/tasks.module';
import { CsvModule } from './tasks/csv/csv.module';
import { DatabaseModule } from './drizzle/database.module';

@Module({
  imports: [ScheduleModule.forRoot(),UserModule, TransactionModule, TasksModule,CsvModule, DatabaseModule],
  providers: [TransactionService],
  controllers: [TransactionController],
})
export class AppModule {}
