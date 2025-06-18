'use client';

import { useState, useEffect } from 'react';
import Notification from '@/components/Notification';
import ChatInput from '@/components/ChatInput';
import NewChatModal from './NewChatModel';

export default function ResultPageContent({
  onMicClick,
}: {
  onMicClick: () => void;
}) {
  const [isTyping, setIsTyping] = useState(true);
  const [showNewChat, setShowNewChat] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  const fullText = `UI-UX stands for User Interface (UI) and User Experience (UX). Though they are closely related, they focus on different aspects of a product's design and usability.\n\nUI (User Interface): UI is about how a product looks. It includes visual design, such as buttons, icons, color schemes, typography, spacing, layout, etc. UI designers focus on making interfaces attractive, consistent, and easy to interact with. Think of UI as the look and feel of the product — what users see and touch.UI-UX stands for User Interface (UI) and User Experience (UX). Though they are closely related, they focus on different aspects of a product's design and usability.\n\nUI (User Interface): UI is about how a product looks. It includes visual design, such as buttons, icons, color schemes, typography, spacing, layout, etc. UI designers focus on making interfaces attractive, consistent, and easy to interact with. Think of UI as the look and feel of the product — what users see and touUI-UX stands for User Interface (UI) and User Experience (UX). Though they are closely related, they focus on different aspects of a product's design and usability.\n\nUI (User Interface): UI is about how a product looks. It includes visual design, such as buttons, icons, color schemes, typography, spacing, layout, etc. UI designers focus on making interfaces attractive, consistent, and easy to interact with. Think of UI as the look and feel of the product — what users see and touUI-UX stands for User Interface (UI) and User Experience (UX). Though they are closely related, they focus on different aspects of a product's design and usability.\n\nUI (User Interface): UI is about how a product looks. It includes visual design, such as buttons, icons, color schemes, typography, spacing, layout, etc. UI designers focus on making interfaces attractive, consistent, and easy to interact with. Think of UI as the look and feel of the product — what users see and tou`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-screen w-full bg-black text-white font-inter relative">
      {/* Scrollable content */}
      <div
      className="flex-1 overflow-y-scroll pl-8 pr-2 sm:pl-10 sm:pr-4 md:pl-12 md:pr-6 lg:pl-0 pt-6"

        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div
          className="flex flex-col items-center w-full"
          style={{
            scrollbarWidth: 'none',
          }}
        >
          {/* Notification */}
          <Notification />

          {/* Chat area */}
          <div className="flex flex-col w-full gap-6 mt-6 items-end px-2 sm:px-4">
            {/* Question bubble */}
            <div className="w-full flex justify-end">
              <div
                className="
                  bg-[#59575733] text-white flex items-center px-4
                  rounded-[20px] shadow text-sm font-medium
                  overflow-hidden whitespace-pre-line text-[14px]
                  w-full max-w-[378px] min-h-[64px]
                  sm:text-[16px] md:text-[18px]
                "
              >
                Brief out about what is UI UX Designing
              </div>
            </div>

            {/* Answer bubble */}
            <div className="w-full flex justify-start">
              <div
                className="
                  bg-transparent text-white px-3 sm:px-6 py-3 sm:py-4
                  rounded-[20px] flex flex-col justify-start
                  text-sm md:text-[16px] whitespace-pre-line
                  w-full max-w-[933px] min-h-[160px] sm:min-h-[208px] md:min-h-[256px] lg:min-h-[288px]
                  transition-all duration-200
                "
                // min-h ensures no layout shift as text types out
              >
                {/* Title is static, not animated */}
                <span className="font-semibold text-[16px] sm:text-[20px] mb-1 sm:mb-4 block">
                  Definition of UI/UX<br />
                </span>
                {/* Only this span gets the typing effect */}
                <span>
                  {displayedText}
                  {/* Optionally, show a blinking cursor while typing */}
                  {isTyping && <span className="animate-pulse">|</span>}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Input fixed at the bottom */}
      <div className="w-full px-2 pb-6 sm:pb-8 md:pb-10 pt-2 bg-black sticky bottom-0 z-50">
        <div className="w-full max-w-[800px] mx-auto">
          <ChatInput onSend={() => {}} onMicSend={onMicClick} />
        </div>
      </div>

      <div className="pl-8 sm:pl-10 md:pl-12 lg:pl-0">
  <NewChatModal />
</div>

    </div>
  );
}