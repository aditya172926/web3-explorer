import axios from 'axios';
import { BACKEND_BASE_URL } from '../constants';

export interface RawContract {
    value: string | null;
    address: string | null;
    decimal: string | null;
}

export interface TransactionMetadata {
    blockTimestamp: string
}

export interface Transaction {
    blockNum: string;           // hex
    blockNumberDecimal: number; // added for sorting
    uniqueId: string;
    hash: string;
    from: string;
    to: string;
    value: number;
    erc721TokenId: string | null;
    erc1155Metadata: any | null;
    tokenId: string | null;
    asset: string | null;
    category: string;
    rawContract: RawContract;
    metadata: TransactionMetadata;
}


export interface TransactionResponse {
    data: Transaction[];
    nextPageKey: string | null;
}

interface GetTransactionsParams {
    txnDirection: 0 | 1;
    limit?: number;
    pageKey?: string;
}

const API_BASE = BACKEND_BASE_URL;

export async function getTransactions(
    address: string,
    { txnDirection, limit = 20, pageKey = "1" }: GetTransactionsParams
): Promise<TransactionResponse> {
    const res = await axios.get<TransactionResponse>(
        `${API_BASE}/transaction/history/${txnDirection}/${address}`,
        {
            params: {
                limit,
                pageKey,
            },
        }
    );

    console.log("res ", res);

    return res.data;
}
