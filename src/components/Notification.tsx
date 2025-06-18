'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Notification({
  message = "Your uploaded file will be deleted in 6 hours.",
  subMessage = "Please download it if needed.",
  icon = "/warning.png",
}: {
  message?: string;
  subMessage?: string;
  icon?: string;
}) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="
        relative flex items-center 
        w-[88vw] max-w-[300px] sm:max-w-xl sm:w-full 
        mx-auto
        px-3 py-2 sm:px-6 sm:py-4
        bg-black/20 backdrop-blur-lg
        rounded-xl shadow-lg
        border border-white/10
        gap-3 sm:gap-6
        min-h-[60px] sm:min-h-[72px]
      "
      style={{
        boxShadow:
          '0px 2px 4px 1px #35353533, 0px 1px 5px 2px #35353533 inset, 0px 0px 8px 0px #FFFFFF33 inset, 1px 2px 3px 0px #FFFFFF33 inset, -1px -2px 2px 0px #FFFFFF1A inset',
      }}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <Image
          src={icon}
          alt="Warning Icon"
          width={24}
          height={24}
          className="object-contain sm:w-[32px] sm:h-[32px]"
          priority
        />
      </div>

      {/* Message Content */}
      <div className="flex flex-col flex-1 text-left">
        <span className="text-[#E7AA47] font-semibold text-[11px] sm:text-sm leading-tight">
          {message}
        </span>

        {/* Sub-message only on medium screens and above */}
        <span className="hidden sm:flex text-white font-normal text-xs leading-snug mt-1 items-center gap-1">
          {subMessage}
          <Image
            src="/upload.png"
            alt="Upload"
            width={14}
            height={14}
            className="inline-block"
            priority
          />
        </span>
      </div>

      {/* Close Button */}
      <button
        aria-label="Close notification"
        onClick={() => setVisible(false)}
        className="
          absolute top-1.5 right-1.5 sm:top-2 sm:right-2 p-1 rounded-full
          hover:bg-white/10 transition
          text-white text-sm
          focus:outline-none
        "
      >
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
          <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
