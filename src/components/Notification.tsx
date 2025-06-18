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
        relative flex items-center w-full max-w-xl mx-auto
        px-4 py-3 sm:py-4 sm:px-6
        bg-black/20 backdrop-blur-lg
        rounded-xl shadow-lg
        border border-white/10
        gap-4 sm:gap-6
        min-h-[72px]
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
          width={32}
          height={32}
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 text-left">
        <span className="text-[#E7AA47] font-semibold text-[12px] sm:text-sm leading-tight">
          {message}
        </span>
        <span className="text-white font-normal text-[10px] sm:text-xs leading-snug mt-1 flex items-center gap-1">
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
          absolute top-2 right-2 p-1 rounded-full
          hover:bg-white/10 transition
          text-white text-base
          focus:outline-none
        "
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
