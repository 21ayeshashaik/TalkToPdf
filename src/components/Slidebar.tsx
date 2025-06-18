'use client';

import Image from 'next/image';
import { useNewChatStore } from '@/stores/useNewChatStore';

export default function Sidebar() {
  const openNewChat = useNewChatStore((state) => state.openNewChat);

  return (
    <div
      className={`
        h-screen
        flex
        flex-col
        justify-between
        items-center
        py-2
        px-0
        bg-black/10
        rounded-2xl
        shadow-[0_3px_8px_3px_#35353533,inset_0_2px_10px_5px_#35353533,inset_0_0px_14px_0px_#FFFFFF40,inset_1px_3px_5px_0px_#FFFFFF40,inset_-1px_-3px_3px_0px_#FFFFFF1A]
        backdrop-blur-[10px]
        w-[64px] sm:w-[72px] md:w-[80px]
        min-w-[56px] 
        z-10
        fixed top-0 left-0
      `}
      style={{
        // fallback for backdrop blur (for browsers that don't support tailwind's class)
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Upper section */}
      <div className="flex flex-col gap-4 mt-8 items-center">
        <button
          className="w-10 h-10 sm:w-[35px] sm:h-[35px] flex items-center justify-center"
          onClick={openNewChat}
        >
          <Image src="/newchat.png" alt="New Chat" width={28} height={28} className="object-contain" />
        </button>
        <div className="w-10 h-10 sm:w-[35px] sm:h-[35px] flex items-center justify-center">
          <Image src="/funnel.png" alt="Funnel" width={28} height={28} className="object-contain" />
        </div>
      </div>

      {/* Lower section */}
      <div className="flex flex-col gap-5 mb-7 items-center">
        <Image src="/settings.png" alt="Settings" width={24} height={24} className="object-contain" />
        <Image src="/account.png" alt="Account" width={24} height={24} className="object-contain" />
        <Image src="/back.png" alt="Back" width={24} height={24} className="object-contain" />
      </div>
    </div>
  );
}