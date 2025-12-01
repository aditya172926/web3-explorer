export class TransactionData {
    from: string;
    to: string;
    transaction_hash: string;
    block_number: number;
    timestamp: number;
    transaction_fee: number;
    gas_price: number;
    gas_fees: number
}

export class TransactionSummary {
    from: string;
    to: string;
    transaction_hash: string;
}