'use client'

// pages/logs.tsx
import React from 'react';

const Logs = () => {
  const logs = [
    {
      id: 1,
      action: 'User logged in',
      timestamp: '2024-06-12T09:00:00Z',
    },
    {
      id: 2,
      action: 'User updated profile',
      timestamp: '2024-06-11T16:00:00Z',
    },
    // Add more logs as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white max-w-4xl mx-auto rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Activity Logs</h1>
        <ul>
          {logs.map((log) => (
            <li key={log.id} className="p-4 border-b last:border-b-0">
              <div className="flex justify-between">
                <span>{log.action}</span>
                <span className="text-gray-500 text-sm">
                  {new Date(log.timestamp).toLocaleString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Logs;
