'use client';

import Image from 'next/image';
import { useNewChatStore } from '@/stores/useNewChatStore';

export default function Sidebar() {
  const openNewChat = useNewChatStore((state) => state.openNewChat);

  return (
      <div
  className={`
    h-screen sm:h-screen md:h-screen lg:h-screen min-h-screen
 flex flex-col justify-between items-center
    py-4
    bg-black/10
    rounded-2xl
    shadow-[0_3px_8px_3px_#35353533,inset_0_2px_10px_5px_#35353533,inset_0_0px_14px_0px_#FFFFFF40,inset_1px_3px_5px_0px_#FFFFFF40,inset_-1px_-3px_3px_0px_#FFFFFF1A]
    backdrop-blur-[10px]
    w-[56px] sm:w-[64px] md:w-[72px] lg:w-[80px]
    min-w-[52px]
    z-10
   
  `}
  style={{
    backdropFilter: 'blur(10px)',
  }}
>
      {/* Top Icons Section */}
      <div className="flex flex-col gap-4 items-center mt-4">
        {/* New Chat Button */}
        <button
          onClick={openNewChat}
          className="w-10 h-10 sm:w-[36px] sm:h-[36px] flex items-center justify-center rounded-lg
            transition-all duration-200 ease-in-out
            hover:scale-110 hover:shadow-[0_0_10px_#FFFFFF40]
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <Image src="/newchat.png" alt="New Chat" width={28} height={28} className="object-contain" />
        </button>

        {/* Funnel (Filters) */}
        <div className="w-10 h-10 sm:w-[36px] sm:h-[36px] flex items-center justify-center">
          <Image src="/funnel.png" alt="Funnel" width={28} height={28} className="object-contain" />
        </div>
      </div>

      {/* Bottom Icons Section */}
      <div className="flex flex-col gap-5 items-center mb-6">
        {/* Settings */}
        <div className="w-10 h-10 sm:w-[36px] sm:h-[36px] flex items-center justify-center rounded-lg
            transition-all duration-200 ease-in-out
            hover:scale-110 hover:shadow-[0_0_10px_#FFFFFF40]
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <Image src="/settings.png" alt="Settings" width={24} height={24} className="object-contain" />
        </div>

        {/* Account */}
        <div className="w-10 h-10 sm:w-[36px] sm:h-[36px] flex items-center justify-center rounded-lg
            transition-all duration-200 ease-in-out
            hover:scale-110 hover:shadow-[0_0_10px_#FFFFFF40]
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <Image src="/account.png" alt="Account" width={24} height={24} className="object-contain" />
        </div>

        {/* Back */}
        <div className="w-10 h-10 sm:w-[36px] sm:h-[36px] flex items-center justify-center rounded-lg
            transition-all duration-200 ease-in-out
            hover:scale-110 hover:shadow-[0_0_10px_#FFFFFF40]
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <Image src="/back.png" alt="Back" width={24} height={24} className="object-contain" />
        </div>
      </div>
    </div>
  );
}
