'use client';
// pages/billing.tsx
import React from 'react';

const Billing = () => {
  const billingHistory = [
    {
      id: 1,
      date: '2024-06-01',
      description: 'Monthly Subscription',
      amount: '$10.00',
    },
    {
      id: 2,
      date: '2024-05-01',
      description: 'Monthly Subscription',
      amount: '$10.00',
    },
    // Add more billing records as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white max-w-4xl mx-auto rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Billing History</h1>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Date</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b">Amount</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map((record) => (
              <tr key={record.id}>
                <td className="px-4 py-2 border-b">{record.date}</td>
                <td className="px-4 py-2 border-b">{record.description}</td>
                <td className="px-4 py-2 border-b">{record.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Billing;
