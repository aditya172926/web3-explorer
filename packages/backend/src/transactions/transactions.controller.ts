import { Controller, Get, Param } from '@nestjs/common';

@Controller('transactions')
export class TransactionsController {
    @Get(':address')
    async fetch_transactions(@Param() params: any) {
        
    }
}
