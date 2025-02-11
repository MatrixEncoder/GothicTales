'use client';

import React, { useState } from 'react';

const InvokeSummoning: React.FC = () => {
  const [summoned, setSummoned] = useState(false);

  const handleInvoke = () => {
    setSummoned(true);
    setTimeout(() => setSummoned(false), 3000);
  };

  return (
    <>
      <button 
        onClick={handleInvoke}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Invoke
      </button>

      {summoned && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <h2 className="text-4xl font-bold text-[#8B0000] uppercase tracking-widest">
            You have summoned the Beast
          </h2>
        </div>
      )}
    </>
  );
};

export default InvokeSummoning;
