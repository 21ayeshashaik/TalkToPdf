'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const RING_COUNT = 6;
const RING_DELAY = 0.18;

export default function Mic({
  onClose,
  onStartGenerating,
}: {
  onClose: () => void;
  onStartGenerating: () => void;
}) {
  const [isMuted, setIsMuted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      if (!isMuted) {
        onStartGenerating();
        onClose();
      }
    }, 10000);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, []);

  useEffect(() => {
    if (isMuted) clearTimer();
    else startTimer();
  }, [isMuted]);

  const MIC_SIZE = 80; // base size for small screens
  const RING_BASE_SIZE = MIC_SIZE + 30;
  const RING_INCREMENT = 18;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-between bg-black bg-opacity-50 z-50 px-3 sm:px-6 py-6">
      
      {/* Rings and Mic */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-[300px] sm:max-w-[360px] min-h-[280px] sm:min-h-[320px] flex-grow">
        
        {/* Concentric Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {Array.from({ length: RING_COUNT }, (_, i) => {
            const ringSize = RING_BASE_SIZE + i * RING_INCREMENT;
            return (
              <motion.div
                key={i}
                className="absolute border-2 rounded-full border-white/30"
                style={{
                  width: `${ringSize}px`,
                  height: `${ringSize}px`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  !isMuted
                    ? {
                        opacity: [0, 0.5, 0],
                        scale: [0.8, 1.1, 1.4],
                      }
                    : {
                        opacity: 0,
                        scale: 0.8,
                      }
                }
                transition={{
                  duration: 2,
                  repeat: !isMuted ? Infinity : 0,
                  delay: i * RING_DELAY,
                  ease: 'easeOut',
                }}
              />
            );
          })}
        </div>

        {/* Microphone Button */}
        <div
          className="relative z-10 flex items-center justify-center rounded-full shadow-lg"
          style={{
            width: `${MIC_SIZE}px`,
            height: `${MIC_SIZE}px`,
            background: 'linear-gradient(180deg, #8911CF 0%, #450969 70%)',
          }}
        >
          <Image src="/microphone.png" alt="Mic" width={36} height={36} className="object-contain" />
        </div>
      </div>

      {/* Controls */}
      <div className="w-full max-w-[300px] sm:max-w-[360px] flex justify-between items-center gap-4 mt-8 px-2 sm:px-0">
        {/* Mute Button */}
        <button
          onClick={() => setIsMuted((prev) => !prev)}
          className="relative flex items-center justify-center rounded-full transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
          style={{
            width: '64px',
            height: '64px',
            backdropFilter: 'blur(10px)',
            background: '#0000000D',
            boxShadow:
              '0px 3px 8px 3px #3535351A, inset 0px 2px 10px 5px #3535351A, inset 0px 4px 14px 0px #FFFFFF26, inset 1px 3px 5px 0px #FFFFFF1A, inset -1px -3px 3px 0px #FFFFFF0D',
          }}
        >
          <Image src="/microphone.png" alt="Mute" width={30} height={30} />
          {isMuted && (
            <div className="absolute w-[2px] h-[44px] bg-white rotate-45 rounded-full" />
          )}
        </button>

        {/* Close Button */}
        <button
          onClick={() => {
            clearTimer();
            onClose();
          }}
          className="relative flex items-center justify-center rounded-full transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
          style={{
            width: '64px',
            height: '64px',
            backdropFilter: 'blur(10px)',
            background: '#0000000D',
            boxShadow:
              '0px 3px 8px 3px #3535351A, inset 0px 2px 10px 5px #3535351A, inset 0px 4px 14px 0px #FFFFFF26, inset 1px 3px 5px 0px #FFFFFF1A, inset -1px -3px 3px 0px #FFFFFF0D',
          }}
        >
          <div className="text-white text-xl font-bold">✕</div>
        </button>
      </div>
    </div>
  );
}
