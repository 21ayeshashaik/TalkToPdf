'use client';

import Image from 'next/image';

export default function Attachments() {
  return (
    <div className="
      relative
      w-[90vw] max-w-[338px] min-w-[180px]
      h-[120px] sm:h-[140px] md:h-[150px]
      rounded-[18px] sm:rounded-[24px]
      border border-white/20
      bg-[#262626]
      shadow-[0px_4px_8px_0px_#00000033]
      p-3 sm:p-4
      flex flex-col justify-center items-center gap-2
    ">
      {/* Top Row: Icons with Text Below */}
      <div className="w-full flex justify-around items-center">
        {/* Document Icon with Text */}
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/documents.png"
            alt="Document Icon"
            width={28}
            height={28}
            className="object-contain sm:w-[30px] sm:h-[30px]"
          />
          <p
            className="font-inter font-normal text-[12px] sm:text-[14px] leading-[16px] sm:leading-[18px] tracking-[-0.17px] text-center text-white"
          >
            Browse Documents
          </p>
        </div>

        {/* Drive Icon with Text */}
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/drive.png"
            alt="Upload Icon"
            width={28}
            height={28}
            className="object-contain sm:w-[30px] sm:h-[30px]"
          />
          <p
            className="font-inter font-normal text-[12px] sm:text-[14px] leading-[16px] sm:leading-[18px] tracking-[-0.17px] text-center text-white"
          >
            Upload from Drive
          </p>
        </div>
      </div>
    </div>
  );
}