import { Controller, Get, Param } from '@nestjs/common';
import { TransactionSummary } from './transactions.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {

    constructor(
        private transactionService: TransactionsService
    ) {}

    @Get(':address')
    async fetch_transactions(@Param() params: any) {
        const user_address = params.address;
        const transactions = await this.transactionService.fetch_user_transactions(user_address);
        console.log("User history transactions: ", transactions);
    }

    @Get(':transaction_hash')
    async fetch_transaction_data(@Param() params: any) {

    }
}
