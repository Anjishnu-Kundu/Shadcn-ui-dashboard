// pages/inbox.tsx
'use client'
import React from 'react';

const Inbox = () => {
  const messages = [
    {
      id: 1,
      sender: 'John Doe',
      subject: 'Meeting Reminder',
      preview: 'Don’t forget our meeting at 3 PM today.',
      timestamp: '2024-06-12T12:00:00Z',
    },
    {
      id: 2,
      sender: 'Jane Smith',
      subject: 'Project Update',
      preview: 'Here is the latest update on the project...',
      timestamp: '2024-06-11T15:00:00Z',
    },
    // Add more messages as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Inbox</h1>
      <div className="bg-white rounded-lg shadow">
        {messages.map((message) => (
          <div key={message.id} className="p-4 border-b last:border-b-0">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{message.subject}</h2>
                <p className="text-gray-600">{message.sender}</p>
                <p className="text-gray-500 text-sm">{new Date(message.timestamp).toLocaleString()}</p>
              </div>
              <p className="text-gray-700">{message.preview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
