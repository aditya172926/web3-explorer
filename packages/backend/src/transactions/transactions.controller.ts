import { Controller, Get, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { EvmaddressPipe } from 'src/pipes/evmaddress/evmaddress.pipe';

@Controller('transaction')
export class TransactionsController {

    constructor(
        private transactionService: TransactionsService
    ) {}

    @Get('history/:address')
    async fetch_transactions(@Param('address', EvmaddressPipe) address: string) {
        return await this.transactionService.fetch_user_transactions(address);
    }

    @Get('info/:transaction_hash')
    async fetch_transaction_data(@Param() params: any) {
        const transaction_hash = params.transaction_hash;
        return await this.transactionService.fetch_transaction_data(transaction_hash);
    }
}
