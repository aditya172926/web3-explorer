import { Transaction } from '../services/transactions';
import { format } from 'date-fns';

interface Props {
  tx: Transaction;
  type: 'inbound' | 'outbound';
}

export default function TransactionCard({ tx, type }: Props) {
  return (
    <div className="p-4 border rounded mb-2 bg-white shadow-sm">
      <div className="flex justify-between">
        <div>
          <span className="font-semibold">{type === 'inbound' ? 'Received' : 'Sent'}</span> {tx.asset || 'ETH'} {tx.value}
        </div>
        <div className="text-sm text-gray-500">
          {tx.metadata.blockTimestamp ? format(new Date(tx.metadata.blockTimestamp), 'dd MMM yyyy HH:mm') : 'N/A'}
        </div>
      </div>
      <div className="text-xs text-gray-400 mt-1">
        Hash: {tx.hash}
      </div>
      <div className="text-xs text-gray-400">
        From: {tx.from} → To: {tx.to}
      </div>
    </div>
  );
}
