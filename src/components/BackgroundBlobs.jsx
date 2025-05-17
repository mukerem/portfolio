import React from 'react';

const BackgroundBlobs = () => {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 dark:opacity-0 rounded-full filter blur-3xl opacity-60 animate-pulse-slow"
        style={{ animationDelay: '500ms' }}
      />
      <div
        className="absolute top-1/3 -left-24 w-80 h-80 bg-secondary-100 dark:opacity-0 rounded-full filter blur-3xl opacity-60 animate-pulse-slow"
        style={{ animationDelay: '1000ms' }}
      />
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary-900 opacity-0 dark:opacity-20 rounded-full filter blur-3xl animate-pulse-slow"
        style={{ animationDelay: '500ms' }}
      />
      <div
        className="absolute top-1/3 -left-24 w-80 h-80 bg-secondary-900 opacity-0 dark:opacity-20 rounded-full filter blur-3xl animate-pulse-slow"
        style={{ animationDelay: '1000ms' }}
      />
    </div>
  );
};

export default BackgroundBlobs;
