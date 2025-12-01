import { useState, useEffect } from 'react';
import { getTransactions, Transaction } from '../services/transactions';
import TransactionCard from './TransactionCard';

interface Props {
  address: string;
  txnDirection: 0 | 1; // 0 = inbound, 1 = outbound
}

export default function TransactionList({ address, txnDirection }: Props) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!address) return;

    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await getTransactions(address, { txnDirection, limit: 20 });
        console.log(res);
        setTransactions(res);
      } catch (err: any) {
        console.error(err);
        setError('Failed to fetch transactions');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [address, txnDirection]);

  return (
    <div>
      {loading && (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
          <p className="mt-3 text-sm text-gray-600">Loading transactions...</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && transactions.length === 0 && <p>No transactions found.</p>}

      {transactions.map(tx => (
        <TransactionCard key={tx.hash} tx={tx} type={txnDirection === 0 ? 'inbound' : 'outbound'} />
      ))}
    </div>
  );
}
