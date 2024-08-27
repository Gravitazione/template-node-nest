import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { TransactionService } from './modules/transaction/services/transaction.service'
import { TransactionController } from './modules/transaction/controllers/transaction.controller'
import { TransactionModule } from './modules/transaction/transaction.module'

@Module({
  imports: [UserModule, TransactionModule],
  providers: [TransactionService],
  controllers: [TransactionController],
})
export class AppModule {}
