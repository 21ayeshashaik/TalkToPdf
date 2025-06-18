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

  const uploadBtnRef = useRef<HTMLButtonElement>(null);

  const handleMicClose = () => setShowMic(false);
  const handleStartGenerating = () => {
    setShowMic(false);
    setIsGenerating(true);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-black text-white font-inter relative">
      <main className="flex-1 flex flex-col items-center justify-between relative px-3 sm:px-5 md:px-8 lg:px-12">
        {!isGenerating ? (
          <>
            {/* AnimatedBlob */}
            <div className="w-full flex flex-col items-center mt-10 sm:mt-14 md:mt-20">
              <AnimatedBlob />
            </div>

            {/* Greeting Section */}
            <div className="flex-1 flex flex-col items-center justify-center -mt-14 sm:-mt-20 md:-mt-28">
              <div className="flex flex-col items-center gap-2 sm:gap-3 w-[88vw] max-w-[380px] text-center">
                <p className="text-[#CEC9C9] text-sm sm:text-base md:text-lg leading-tight">
                  Hello, Preethi
                </p>
                <h2 className="text-[#CEC9C9] text-base sm:text-lg md:text-xl font-medium leading-tight">
                  How can I help you today?
                </h2>
              </div>
            </div>

            {/* Bottom Buttons */}
           <div className="absolute left-1/2 bottom-2 sm:bottom-4 transform -translate-x-1/2 flex gap-8 sm:gap-14 md:gap-24 lg:gap-36 w-full px-3 pb-4 sm:pb-6 md:pb-8 justify-center">

              <div className="relative flex items-end">
                <button
                  ref={uploadBtnRef}
                  onClick={() => setShowAttachments(!showAttachments)}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full backdrop-blur-[10px] flex items-center justify-center 
                    transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95"
                  style={{
                    background: '#0000000D',
                    boxShadow:
                      '0px 3px 8px 3px #3535351A, inset 0px 2px 10px 5px #3535351A, inset 0px 4px 14px 0px #FFFFFF26, inset 1px 3px 5px 0px #FFFFFF1A, inset -1px -3px 3px 0px #FFFFFF0D',
                  }}
                >
                  <Image src="/upload.png" alt="Upload" width={28} height={28} className="mx-auto" />
                </button>

                {showAttachments && (
                  <div className="absolute bottom-[110%] left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 mb-2 z-[9999]">
                    <Attachments />
                  </div>
                )}
              </div>

              {/* Mic Button */}
              <div
                onClick={() => setShowMic(true)}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full backdrop-blur-[10px] flex items-center justify-center cursor-pointer 
                  transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95"
                style={{
                  background: '#0000000D',
                  boxShadow:
                    '0px 3px 8px 3px #3535351A, inset 0px 2px 10px 5px #3535351A, inset 0px 4px 14px 0px #FFFFFF26, inset 1px 3px 5px 0px #FFFFFF1A, inset -1px -3px 3px 0px #FFFFFF0D',
                }}
              >
                <Image
                  src="/microphone.png"
                  alt="Mic"
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Mic popup */}
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
