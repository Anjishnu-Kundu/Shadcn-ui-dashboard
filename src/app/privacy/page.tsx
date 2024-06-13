'use client'

// pages/privacy.tsx
import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white max-w-4xl mx-auto rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Privacy Settings</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="profileVisibility">
              Profile Visibility
            </label>
            <select className="w-full px-3 py-2 border rounded-lg" id="profileVisibility" name="profileVisibility">
              <option>Public</option>
              <option>Friends</option>
              <option>Private</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="dataSharing">
              Data Sharing
            </label>
            <select className="w-full px-3 py-2 border rounded-lg" id="dataSharing" name="dataSharing">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Privacy;
