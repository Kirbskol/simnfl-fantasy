import React from 'react';

const Draft = ({ userName }) => {
  return (
    <div class="flex-col p-8 items-center text-center">
        <div class="text-center w-1/2 justify-self-center">
            <h1 class="text-4xl self-center font-bold mb-2">Coach {userName}</h1>
            <p class="text-lg text-wrap">You will now select your SimNFL fantasy players.</p>
        </div>
      
      {/* Add draft logic here */}
    </div>
  );
};

export default Draft;