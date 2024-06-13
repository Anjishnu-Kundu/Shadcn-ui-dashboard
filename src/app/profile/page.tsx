// pages/profile.tsx
'use client';
// pages/profile.tsx
import React from 'react';

const Profile = () => {
  const user = {
    name: 'Anjishnu Kundu',
    email: 'codewithanji@gmail.com',
    bio: 'Full Stack Developer with a passion for creating beautiful and functional web applications.',
    avatar: 'https://media.licdn.com/dms/image/C5603AQGmu9ib7yc75g/profile-displayphoto-shrink_800_800/0/1629102601085?e=1723680000&v=beta&t=UVhjUzCR0HDtAriI9X1L95Q95v_2WmpjFn9KGKRs1PA', // Placeholder image URL, replace with actual image URL
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white max-w-2xl mx-auto rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-6">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={user.avatar}
            alt={user.name}
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">Bio</h2>
          <p className="mt-2 text-gray-700">{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
