'use client';

import Image from 'next/image';

export default function Attachments() {
  return (
    <div className="
      relative
      w-[92vw] max-w-[360px] min-w-[160px]
      h-auto min-h-[110px]
      rounded-[16px] sm:rounded-[20px]
      border border-white/20
      bg-[#262626]
      shadow-[0px_4px_8px_0px_#00000033]
      px-4 py-3 sm:px-5 sm:py-4
      flex flex-wrap justify-around items-center gap-y-3
    ">
      {/* Browse Documents Button */}
      <div
        className="
          flex flex-col items-center gap-1 min-w-[100px] cursor-pointer
          transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95
          hover:bg-[#ffffff0a] rounded-lg px-2 py-1
        "
      >
        <Image
          src="/documents.png"
          alt="Document Icon"
          width={26}
          height={26}
          className="object-contain sm:w-[30px] sm:h-[30px]"
        />
        <p className="font-inter font-normal text-[12px] sm:text-[14px] leading-tight text-center text-white">
          Browse Documents
        </p>
      </div>

      {/* Upload from Drive Button */}
      <div
        className="
          flex flex-col items-center gap-1 min-w-[100px] cursor-pointer
          transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95
          hover:bg-[#ffffff0a] rounded-lg px-2 py-1
        "
      >
        <Image
          src="/drive.png"
          alt="Upload Icon"
          width={26}
          height={26}
          className="object-contain sm:w-[30px] sm:h-[30px]"
        />
        <p className="font-inter font-normal text-[12px] sm:text-[14px] leading-tight text-center text-white">
          Upload from Drive
        </p>
      </div>
    </div>
  );
}
