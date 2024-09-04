import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service'; 
import { createTransactionDTO } from '../dtos/transactiondtos';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('fetchAll')
  async getAllTransactions() {
    return this.transactionService.getServiceAll();
  }

  @Post('createTransaction')
  async createTransaction(@Body() transactionData: createTransactionDTO) {
    return this.transactionService.createTransaction(transactionData);
  }
}
