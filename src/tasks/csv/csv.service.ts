import { Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parser';
import { Cron } from '@nestjs/schedule';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '../../drizzle/schema';
@Injectable()
export class CsvService {
  private readonly folderPath = 'f:/csv'; // Update this path

  constructor(
    @Inject('DB_DEV') private drizzle: MySql2Database<typeof schema>
  ) {}

  @Cron('* * * * *') // This cron expression means every minute
  async handleCron() {
    console.log('Running scheduled CSV reading task');
    console.log('transaction' , await this.drizzle.query.transaction.findMany())
    this.readCsvFiles(this.folderPath);
  }

  async readCsvFiles(folderPath: string): Promise<void> {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }

      const csvFiles = files.filter(file => path.extname(file) === '.csv');

      csvFiles.forEach(file => {
        const filePath = path.join(folderPath, file);

        fs.createReadStream(filePath)
          .pipe(csv())
          .on('data', async (row) => {
            console.log('Parsed row:', row);
            // Insert the row into the transaction table
            try {
              // await this.drizzle.insert(schema.transaction).values({
              //   transactionNo: row.transaction_no,
              //   transactionType: row.transaction_type,
              //   transferFromWallet: row.transfer_from_wallet,
              //   transferToWallet: row.transfer_to_wallet,
              //   businessLineIdFrom: row.business_line_id_from,
              //   businessLineIdTo: row.business_line_id_to,
              //   walletCodeFrom: row.wallet_code_from,
              //   walletCodeTo: row.wallet_code_to,
              //   coinName: row.coin_name,
              //   amount: parseFloat(row.amount),
              //   createDt: new Date(),
              // });
              // console.log('Inserted row:', row);
            } catch (error) {
              console.error('Error inserting row:', error);
            }
          })
          .on('end', () => {
            console.log(`Finished processing ${file}`);
          })
          .on('error', (error) => {
            console.error('Error reading file:', error);
          });
      });
    });
  }
}
