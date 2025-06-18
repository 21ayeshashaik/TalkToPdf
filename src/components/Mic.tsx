'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
  import Image from 'next/image';

const RING_COUNT = 6;
const RING_DELAY = 0.18; // seconds

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

  const MIC_SIZE = 96;
  const RING_BASE_SIZE = MIC_SIZE + 40; // Start rings slightly larger than mic
  const RING_INCREMENT = 20; // Space between rings

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-between bg-black bg-opacity-50 z-50 px-4 py-6">
      {/* Rings and Mic Container */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-[360px] min-h-[320px] flex-grow">
        
        {/* Concentric Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {Array.from({ length: RING_COUNT }, (_, i) => {
            const ringSize = RING_BASE_SIZE + (i * RING_INCREMENT);
            
            return (
              <motion.div
                key={i}
                className="absolute border-2  rounded-full"
                style={{
                  width: `${ringSize}px`,
                  height: `${ringSize}px`,
                }}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8 
                }}
                animate={!isMuted ? {
                  opacity: [0, 0.6, 0],
                  scale: [0.8, 1.2, 1.4],
                } : {
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  duration: 2,
                  repeat: !isMuted ? Infinity : 0,
                  delay: i * RING_DELAY,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>

        {/* Main Microphone */}
      
<div
  className="relative z-10 flex items-center justify-center rounded-full shadow-lg"
  style={{
    width: `${MIC_SIZE}px`,
    height: `${MIC_SIZE}px`,
    background: 'linear-gradient(180deg, #8911CF 0%, #450969 70%)',
    
  }}
>
  {/* Microphone Icon PNG */}
  <Image
    src="/microphone.png" // Make sure this path is correct (public/microphone.png)
    alt="Mic"
    width={40}
    height={40}
    className="object-contain"
  />
</div>

      </div>

      {/* Bottom Buttons */}
      <div className="w-full max-w-[360px] flex justify-between items-center gap-4 mt-8">
        {/* Mute Button */}
        <button
          onClick={() => setIsMuted((prev) => !prev)}
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: '72px',
            height: '72px',
            backdropFilter: 'blur(10px)',
            background: '#0000000D',
            borderRadius: '100px',
            boxShadow:
              '0px 3px 8px 3px #3535351A, inset 0px 2px 10px 5px #3535351A, inset 0px 4px 14px 0px #FFFFFF26, inset 1px 3px 5px 0px #FFFFFF1A, inset -1px -3px 3px 0px #FFFFFF0D',
          }}
        >
          {/* Microphone Icon */}
             <Image src="/microphone.png" alt="Mute" width={34} height={34} />
          
          
          {/* Mute Line */}
          {isMuted && (
            <div className="absolute w-[2px] h-[48px] bg-white rotate-45 rounded-full" />
          )}
        </button>

        {/* Close Button */}
        <button
          onClick={() => {
            clearTimer();
            onClose();
          }}
          className="flex items-center justify-center rounded-full"
          style={{
            width: '72px',
            height: '72px',
            backdropFilter: 'blur(10px)',
            background: '#0000000D',
            borderRadius: '100px',
            boxShadow:
              '0px 3px 8px 3px #3535351A, inset 0px 2px 10px 5px #3535351A, inset 0px 4px 14px 0px #FFFFFF26, inset 1px 3px 5px 0px #FFFFFF1A, inset -1px -3px 3px 0px #FFFFFF0D',
          }}
        >
          {/* Close Icon */}
          <div className="text-white text-xl font-bold">
            ✕
          </div>
        </button>
      </div>
    </div>
  );
}