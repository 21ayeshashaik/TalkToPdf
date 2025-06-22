'use client';

import { useState, useEffect } from 'react';
import Notification from '@/components/Notification';
import ChatInput from '@/components/ChatInput';
import NewChatModal from './NewChatModel';
import { motion, AnimatePresence } from "framer-motion";

export default function ResultPageContent({ onMicClick }: { onMicClick: () => void }) {
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const fullText = `UI-UX stands for User Interface (UI) and User Experience (UX). Though they are closely related, they focus on different aspects of a product's design and usability.
UI (User Interface): UI is about how a product looks. It includes visual design, such as buttons, icons,about how a product looks. It includes visual design, such as button UI-UX stands for User Interface (UI) and User Experience (UX). Though they are closely related, they focus on different aspects of a product's design and usability.
UI (User Interface): UI is about how a product looks. It includes visual design, such as buttons,`;

  // Typing effect
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

  // Show notification after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);


  return (
    <div className="flex flex-col h-screen w-full bg-black text-white font-inter relative">
      <div className="flex-1 overflow-y-scroll pl-1 sm:pl-1 md:pl-5 pr-1 sm:pr-2 md:pr-4 pt-6"
           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex flex-col items-center w-full max-w-[1100px] mx-auto">

          {/* Notification after 3s */}
          <AnimatePresence>
            {showNotification && (
              <motion.div
                key="notification"
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full"
              >
                <Notification />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat bubbles */}
          <div className="flex flex-col w-full gap-6 mt-6 items-end px-2 sm:px-4">
            {/* Question bubble */}
            <div className="w-full flex justify-end">
              <div className="bg-[#59575733] text-white flex items-center px-4 py-3
                rounded-[20px] shadow text-sm font-medium
                whitespace-pre-line text-[14px]
                w-full max-w-[378px] min-h-[64px]
                sm:text-[16px] md:text-[18px]">
                Brief out about what is UI UX Designing
              </div>
            </div>

            {/* Answer bubble */}
<div className="w-full flex justify-start">
  <div className="bg-transparent text-white px-3 sm:px-6 py-3 sm:py-4
    rounded-[20px] flex flex-col justify-start
    text-sm md:text-[16px] whitespace-pre-line
    w-full max-w-[933px] min-h-[200px] transition-all duration-200
    text-left"> {/* Ensures text starts from left */}
    
    <span className="font-semibold text-[16px] sm:text-[20px] mb-1 sm:mb-4 block">
      Definition of UI/UX
    </span>

    <div
      className="text-[14px] sm:text-[16px] leading-relaxed text-left"
      style={{
        minHeight: '150px', // Ensures enough height is reserved initially
        whiteSpace: 'pre-wrap',
        fontFamily: 'inherit',
      }}
    >
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </div>
  </div>
</div>


          </div>
        </div>
      </div>

      {/* Chat input fixed at bottom */}
      <div className="w-full px-3 pb-6 sm:pb-8 md:pb-10 pt-2 bg-black sticky bottom-0 z-50">
        <div className="w-full max-w-[800px] mx-auto">
          <ChatInput onSend={() => {}} onMicSend={onMicClick} />
        </div>
      </div>
    </div>
  );
}
