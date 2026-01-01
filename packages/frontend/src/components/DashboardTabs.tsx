import { useState } from 'react';
import { TRANSACTION_CATEGORIES } from '../constants';
import TransactionList from './TransactionList';

type Props = {
  address: string;
}

export default function DashboardTabs({ address }: Props) {
  const [activeTab, setActiveTab] = useState<0|1>(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  return (
    <div>
      {/* Toggle Button */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-lg border border-gray-300 bg-white p-1">
          <button
            onClick={() => setActiveTab(0)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${activeTab === 0
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-green-600">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd" />
            </svg>
            <span>Inbound</span>
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${activeTab === 1
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-red-600">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
            </svg>
            <span>Outbound</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mb-4 border-b">
        {TRANSACTION_CATEGORIES.map((category, index) => (
          <button
            onClick={() => setActiveCategoryIndex(index)}
            className={`cursor-pointer px-4 py-2 -mb-px ${activeCategoryIndex === index ? 'border-b-2 border-blue-500 font-bold' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Transaction List */}
      <TransactionList address={address} txnDirection={activeTab} categoryIndex={activeCategoryIndex} />
    </div>
  );
}
