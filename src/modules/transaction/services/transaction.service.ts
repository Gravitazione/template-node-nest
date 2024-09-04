import { Inject, Injectable } from '@nestjs/common'
import { MySql2Database } from 'drizzle-orm/mysql2'
import * as schema from '../../../drizzle/schema'
import { createTransactionDTO } from '../dtos/transactiondtos'
@Injectable()
export class TransactionService {
  constructor(@Inject('DB_DEV') private drizzle: MySql2Database<typeof schema>) {}

  async getServiceAll() {
    return await this.drizzle.select().from(schema.transaction)
  }

  async createTransaction(transactionData: createTransactionDTO) {
    try {
      const result = await this.drizzle.insert(schema.transaction).values({
        transactionNo: transactionData.transaction_no,
        transactionType: transactionData.transaction_type,
        transferFromWallet: transactionData.transfer_from_wallet,
        transferToWallet: transactionData.transfer_to_wallet,
        businessLineIdFrom: transactionData.business_line_id_from,
        businessLineIdTo: transactionData.business_line_id_to,
        walletCodeFrom: transactionData.wallet_code_from,
        walletCodeTo: transactionData.wallet_code_to,
        coinName: transactionData.coin_name,
        amount: transactionData.amount,
        createDt: new Date(),
      })
      return result
    } catch (error) {
      console.error('Error creating transaction:', error)
      throw new Error('Could not create transaction')
    }
  }
}
