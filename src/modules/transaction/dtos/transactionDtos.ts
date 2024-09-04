export interface createTransactionDTO {
    transaction_no: string;
    transaction_type: string;
    transfer_from_wallet: string;
    transfer_to_wallet: string;
    business_line_id_from: string;
    business_line_id_to: string;
    wallet_code_from: string;
    wallet_code_to: string;
    coin_name: string;
    amount: string;
  }
  