'use client';

import React from 'react';

export default function GeneratingResponse() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* Keyframes via style tag */}
      <style jsx>{`
        @keyframes bounceUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* Bouncing Balls */}
      <div className="flex">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`
              rounded-full
              mr-3 last:mr-0
              transition-all
              w-10 h-10
              sm:w-12 sm:h-12
              md:w-16 md:h-16
              lg:w-20 lg:h-20
            `}
            style={{
              background: 'linear-gradient(180deg, #3C075F 30%, #3FA738 100%)',
              animation: `bounceUpDown 1.2s ease-in-out ${index * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Generating Text */}
      <p
        className="mt-6 font-inter text-center font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#D9D9D9] leading-snug tracking-tight"
      >
        Generating your response
      </p>
    </div>
  );
}