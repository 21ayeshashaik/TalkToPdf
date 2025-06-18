'use client';

import { useState, useRef } from 'react';
import NewChatModal from '@/components/NewChatModel';
import Attachments from '@/components/Attachment';
import Mic from '@/components/Mic';
import Image from 'next/image';
import MicWrapper from '@/components/MicWrapper';
import AnimatedBlob from '@/components/AnimatedBlog';

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);
  const [activeTab, setActiveTab] = useState('Chats');
  const [showMic, setShowMic] = useState(false);

  // Ref for the upload button container
  const uploadBtnRef = useRef<HTMLButtonElement>(null);

  const handleMicClose = () => setShowMic(false);
  const handleStartGenerating = () => {
    setShowMic(false);
    setIsGenerating(true);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-black text-white font-inter relative">
      <main className="flex-1 flex flex-col items-center justify-between relative">
        {!isGenerating ? (
          <>
            {/* AnimatedBlob at the absolute top and centered */}
            <div className="w-full flex flex-col items-center mt-10 sm:mt-14 md:mt-20">
              <AnimatedBlob />
            </div>

            {/* Centered Text Section (hello, preethi etc) */}
            <div className="flex-1 flex flex-col items-center justify-center -mt-24 sm:-mt-32 md:-mt-36">
              <div className="flex flex-col items-center gap-3 w-[90vw] max-w-[370px] min-w-[170px]">
                <p className="text-[#CEC9C9] text-center text-base sm:text-lg md:text-xl font-normal leading-tight">
                  Hello, Preethi
                </p>
                <h2 className="text-[#CEC9C9] text-center text-lg sm:text-xl md:text-2xl font-medium leading-tight">
                  How can I help you today?
                </h2>
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex gap-12 sm:gap-24 md:gap-[220px] lg:gap-[280px] w-full px-4 justify-center">
              {/* Upload Button with relative container for Attachments popover */}
              <div className="relative flex items-end">
                <button
                  ref={uploadBtnRef}
                  onClick={() => setShowAttachments(!showAttachments)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full backdrop-blur-[10px] flex items-center justify-center"
                  style={{
                    background: '#0000000D',
                    boxShadow:
                      '0px 3px 8px 3px #3535351A, inset 0px 2px 10px 5px #3535351A, inset 0px 4px 14px 0px #FFFFFF26, inset 1px 3px 5px 0px #FFFFFF1A, inset -1px -3px 3px 0px #FFFFFF0D',
                  }}
                >
                  <Image src="/upload.png" alt="Upload" width={36} height={36} className="mx-auto" />
                </button>
                {/* Attachments popover: right above the upload button */}
                {showAttachments && (
                  <div className="absolute bottom-[110%] left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 mb-2 z-50">
                    <Attachments />
                  </div>
                )}
              </div>

              {/* Mic Button */}
              <div
                onClick={() => setShowMic(true)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full backdrop-blur-[10px] flex items-center justify-center cursor-pointer"
                style={{
                  background: '#0000000D',
                  boxShadow:
                    '0px 3px 8px 3px #3535351A, inset 0px 2px 10px 5px #3535351A, inset 0px 4px 14px 0px #FFFFFF26, inset 1px 3px 5px 0px #FFFFFF1A, inset -1px -3px 3px 0px #FFFFFF0D',
                }}
              >
                <Image
                  src="/microphone.png"
                  alt="Mic"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            </div>

            {showMic && (
              <Mic onClose={handleMicClose} onStartGenerating={handleStartGenerating} />
            )}
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <MicWrapper onClose={handleMicClose} onStartGenerating={handleStartGenerating} />
          </div>
        )}
      </main>
    </div>
  );
}