import { Injectable } from '@nestjs/common';
import { TransactionSummary } from './transactions.dto';

@Injectable()
export class TransactionsService {
    async fetch_user_transactions(address: string): Promise<TransactionSummary[]> {
        const alchemy_api = '';
        const payload = [
            {
                id: 1,
                jsonrpc: "2.0",
                method: "alchemy_getAssetTransfers",
                params: {
                    from: address
                },
                excludeZeroValue: false,
                category: [
                    "external",
                    "internal",
                    "erc20",
                    "erc721"
                ],
                contractAddresses: [],
                withMetadata: true
            },
            {
                id: 1,
                jsonrpc: "2.0",
                method: "alchemy_getAssetTransfers",
                params: {
                    to: address
                },
                excludeZeroValue: false,
                category: [
                    "external",
                    "internal",
                    "erc20",
                    "erc721"
                ],
                contractAddresses: [],
                withMetadata: true
            }
        ];

        let response = 
    }
}
