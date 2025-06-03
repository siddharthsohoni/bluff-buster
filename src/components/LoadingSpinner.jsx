import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-4 text-center transition-colors duration-200">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Loading...</p>
    </div>
  );
} 