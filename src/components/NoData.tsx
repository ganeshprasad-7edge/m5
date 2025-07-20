import React from 'react';

export default function NoData() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="text-gray-400 text-8xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </div>
      <h2 className="text-2xl font-medium text-gray-700 mb-2">No Products Found</h2>
      <p className="text-gray-500 mb-6">There are no products available at the moment.</p>
    </div>
  );
}