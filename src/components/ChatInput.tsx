'use client';

import { useState } from 'react';
import Image from 'next/image';
import MicWrapper from './MicWrapper';

type MessageInputProps = {
  onSend: () => void;
  onMicSend: () => void;
};

export default function MessageInput({ onSend, onMicSend }: MessageInputProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [showMic, setShowMic] = useState(false);
return (
  <div className="w-full flex justify-center transition-all duration-300 ease-in-out">
    <div
      className={`flex items-center gap-2 sm:gap-4 ${
        isClicked ? 'w-full justify-start' : 'justify-center'
      }`}
    >
      {/* Large Mic (only when not expanded) */}
      {!isClicked && (
        <div
          onClick={() => setShowMic(true)}
          className="w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] rounded-full backdrop-blur-[10px] flex items-center justify-center cursor-pointer"
          style={{
            background: '#0000000D',
            boxShadow:
              '0px 3px 8px 3px #3535351A, inset 0px 2px 10px 5px #3535351A, inset 0px 4px 14px 0px #FFFFFF26, inset 1px 3px 5px 0px #FFFFFF1A, inset -1px -3px 3px 0px #FFFFFF0D',
          }}
        >
          <Image src="/microphone.png" alt="Mic" width={22} height={22} />
        </div>
      )}

      {/* Input box */}
      <div
         className={`
    relative flex items-center transition-all duration-200 ease-in-out bg-[#0000000D] backdrop-blur-md font-inter text-[#D9D9D9]
    ${isClicked
      ? 'w-full max-w-[700px] h-[48px] sm:h-[64px] rounded-[12px] px-2 sm:px-3 py-1 sm:py-2 text-[14px] sm:text-[16px]'
      : 'w-[90px] sm:w-[180px] h-[40px] sm:h-[56px] rounded-[8px] px-2 py-1 text-[14px] sm:text-[18px]'}
  `}
        style={{
          boxShadow: isClicked
            ? `0px 3px 8px 3px #35353533,
               inset 0px 2px 10px 5px #35353533,
               inset 0px 0px 14px 0px #FFFFFF33,
               inset 1px 3px 5px 0px #FFFFFF33,
               inset -1px -3px 3px 0px #FFFFFF1A`
            : `0px 3px 8px 3px #3535351A,
               inset 0px 2px 10px 5px #3535351A,
               inset 0px 0px 14px 0px #FFFFFF26,
               inset 1px 3px 5px 0px #FFFFFF33,
               inset -1px -3px 3px 0px #FFFFFF0D`,
        }}
        onClick={() => setIsClicked(true)}
      >
      <input
  type="text"
  placeholder={
    isClicked
      ? 'Type here, if you want to add or remove something'
      : 'Type here'
  }
  className="
    w-full h-full
      bg-transparent outline-none
      placeholder:text-[#D9D9D9] placeholder:opacity-50
      text-xs sm:text-sm md:text-base
      px-1 sm:px-2 md:px-3
  "
/>


        {isClicked && (
          <>
            {/* Small mic inside expanded input */}
            <div
              className="absolute right-12 sm:right-14 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowMic(true);
              }}
            >
              <Image src="/microphone.png" alt="Mic" width={16} height={16} />
            </div>

            {/* Send button */}
            {/* Send button */}
<button
  onClick={onSend}
  type="button"
  className="
    absolute right-2 top-1/2 -translate-y-1/2
    w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]
    flex items-center justify-center
    bg-gradient-to-r from-[#3FA738] to-[#6E1EA3]   /* green → purple */
    rounded-[8px]                                  /* square w/ soft corners */
    transition-transform duration-200 ease-in-out
    hover:scale-105 active:scale-95                /* subtle interaction effect */
  "
>
  <Image src="/send.png" alt="Send" width={16} height={16} />
</button>

          </>
        )}
      </div>
    </div>

    {/* Mic Modal */}
    {showMic && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        <MicWrapper
          onClose={() => setShowMic(false)}
          onStartGenerating={() => {
            setShowMic(false);
            onMicSend();
          }}
        />
      </div>
    )}
  </div>
);

}
