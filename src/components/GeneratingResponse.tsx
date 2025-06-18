'use client';

import React from 'react';

export default function GeneratingResponse() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 py-8">
      {/* Keyframes */}
      <style jsx>{`
        @keyframes bounceUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Responsive Bouncing Balls */}
      <div className="flex">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="rounded-full mr-2 last:mr-0"
            style={{
              width: 'clamp(12px, 4vw, 32px)',
              height: 'clamp(12px, 4vw, 32px)',
              background: 'linear-gradient(180deg, #3C075F 30%, #3FA738 100%)',
              animation: `bounceUpDown 1.2s ease-in-out ${index * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Responsive Text */}
      <p className="mt-4 text-center text-[#D9D9D9] font-medium leading-snug tracking-tight"
         style={{
           fontSize: 'clamp(14px, 3vw, 22px)',
         }}
      >
        Generating your response
      </p>
    </div>
  );
}
