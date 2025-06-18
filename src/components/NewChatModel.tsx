'use client';

import { useState } from 'react';
import { useNewChatStore } from '@/stores/useNewChatStore';
import Image from 'next/image';

 
export default function NewChatModal() {
  const showNewChat = useNewChatStore((state) => state.showNewChat);
  const closeNewChat = useNewChatStore((state) => state.closeNewChat);
  const [activeTab, setActiveTab] = useState<'Chats' | 'Saved'>('Chats');

  const chats = [
    {
      title: 'Competitive Analysis research',
      time: 'Thu',
      description:
        'A competitive analysis of restaurant delivery mobile applications reveals key insights ...',
    },
    {
      title: 'Meeting Summary',
      time: 'Wed',
      description:
        'Summary of the design review meeting, key action items and next steps ...',
    },
    {
      title: 'User Journey Insights',
      time: 'Tue',
      description:
        'User journey mapping for onboarding flow and conversion optimization ideas ...',
    },
    {
      title: 'Client Feedback Log',
      time: 'Mon',
      description:
        "Feedback and suggested changes from last week's client call ...",
    },
    {
      title: 'Bug Report Notes',
      time: 'Sun',
      description:
        'Observed issues in mobile responsiveness and sidebar behavior ...',
    },
  ];

  const saved = [
    {
      title: 'Saved Insight #1',
      time: 'Wed',
      description:
        'This is a saved note about user engagement patterns and feature preferences...',
    },
    {
      title: 'Saved Insight #2',
      time: 'Tue',
      description:
        'A list of potential KPIs for next quarter with metric definitions...',
    },
    {
      title: 'Saved Insight #3',
      time: 'Mon',
      description:
        'Important section from the industry whitepaper on GenAI in commerce...',
    },
    {
      title: 'Saved Insight #4',
      time: 'Sun',
      description: 'UI audit results from peer review session last Friday...',
    },
    {
      title: 'Saved Insight #5',
      time: 'Sat',
      description: 'Future improvements to chat memory features...',
    },
  ];

  if (!showNewChat) return null;

  return (
    <div
    className="
      fixed top-3 left-2 sm:left-4
      w-[94vw] md:w-[320px]
      h-[88vh] sm:h-[90vh]
      rounded-[16px] sm:rounded-[20px]
      bg-[#0000000D] backdrop-blur-[10px] 
      px-3 py-2 sm:p-4 pt-5 sm:pt-6  /* ✅ Added top padding */
      z-50 overflow-hidden
      shadow-[0px_3px_8px_3px_#35353533,inset_0px_2px_10px_5px_#35353533,inset_0px_0px_14px_0px_#FFFFFF40,inset_1px_3px_5px_0px_#FFFFFF40,inset_-1px_-3px_3px_0px_#FFFFFF1A]
      flex flex-col
    "
  >
   
   <div className="flex justify-start mb-2 -mt-2 sm:-mt-4">
  <button
    className="p-2 rounded-lg hover:bg-[#ffffff14] transition"
    onClick={closeNewChat}
    aria-label="Close"
  >
    <Image
      src="/exit.jpeg" 
      alt="Exit"
      width={20}
      height={20}
      className="object-contain"
    />
  </button>
</div>


    <div className="flex items-center justify-between mb-4 mt-2 sm:mb-6 sm:mt-6">
      <h2 className="text-[#F3F0F0] text-[22px] sm:text-[26px] font-medium tracking-[-0.17px]">
        My Chats
      </h2>
      <div
        className="bg-green-500 p-2 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95"
        onClick={closeNewChat}
      >
        <Image src="/plus.png" alt="New Chat" width={20} height={20} />
      </div>
    </div>
      

      {/* Search */}
      <input
        type="text"
        placeholder="Search Anything"
        className="w-full h-[40px] sm:h-[45px] rounded-lg px-3 sm:px-4 py-2 bg-[#1E1E1E] text-white mb-3 sm:mb-4 text-sm sm:text-base"
      />

      {/* Tabs */}
      <div className="relative mb-2">
        <div className="flex gap-2">
          {['Chats', 'Saved'].map((tab) => {
            const isActive = activeTab === tab;
            const count = tab === 'Chats' ? chats.length : saved.length;

            return (
              <button
  key={tab}
  onClick={() => setActiveTab(tab as 'Chats' | 'Saved')}
  className={`flex-1 px-2 py-2 sm:px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ease-in-out flex items-center justify-center gap-1
    ${isActive
      ? 'bg-[#F2EEEE0D] text-white border-b-2 border-white shadow-md'
      : 'bg-transparent text-[#FFFFFF80] hover:bg-[#ffffff0c] hover:text-white'}`}
>

                {/* Dot */}
                <span
                  className={`h-2 w-2 rounded-full ${
                    isActive ? 'bg-[#3FA738]' : 'bg-white'
                  }`}
                ></span>
                {/* Label and Count */}
                <span>
                  {tab} {count}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-2 h-[1px] w-full bg-[#FFFFFF33]" />
      </div>

      {/* Scrollable Chats/Saved Section */}
      <div className="space-y-2 sm:space-y-3 overflow-y-auto max-h-[55vh] sm:max-h-[60vh] pr-1 sm:pr-2 mt-2 sm:mt-3">
        {(activeTab === 'Chats' ? chats : saved).map((item, idx) => (
          <div
            key={idx}
            className="w-full bg-black rounded-[12px] sm:rounded-[15px] p-2 sm:p-3 hover:bg-[#F2EEEE1A] transition"
          >
            <div className="flex justify-between items-start">
              <p className="text-[#6E1EA3] font-semibold text-[11px] sm:text-[12px] leading-tight w-[80%]">
                {item.title}
              </p>
              <span className="text-[#ABABAB99] text-[9px] sm:text-[10px]">{item.time}</span>
            </div>
            <p className="text-[#ABABAB] text-[9px] sm:text-[10px] mt-1 leading-snug">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}