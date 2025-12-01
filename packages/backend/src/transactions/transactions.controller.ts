import { Controller, Get, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { EvmaddressPipe } from 'src/pipes/evmaddress/evmaddress.pipe';

@Controller('transactions')
export class TransactionsController {

    constructor(
        private transactionService: TransactionsService
    ) {}

    @Get(':address')
    async fetch_transactions(@Param('address', EvmaddressPipe) address: string) {
        return await this.transactionService.fetch_user_transactions(address);
    }

    @Get(':transaction_hash')
    async fetch_transaction_data(@Param() params: any) {

    }
}
