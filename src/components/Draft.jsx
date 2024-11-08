import React from 'react';

const Draft = ({ userName }) => {
  return (
    <div>
      <h1 class="text-4xl self-center mb-2">Welcome to the Draft, {userName}!</h1>
      {/* Add draft logic here */}
    </div>
  );
};

export default Draft;