'use client'

// pages/notifications.tsx
import React from 'react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      message: 'Your subscription will expire in 3 days.',
      timestamp: '2024-06-10T10:00:00Z',
    },
    {
      id: 2,
      message: 'You have a new message from Jane.',
      timestamp: '2024-06-11T14:30:00Z',
    },
    // Add more notifications as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white max-w-4xl mx-auto rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Notifications</h1>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className="p-4 border-b last:border-b-0">
              <div className="flex justify-between">
                <span>{notification.message}</span>
                <span className="text-gray-500 text-sm">
                  {new Date(notification.timestamp).toLocaleString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
