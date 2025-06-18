import './globals.css';
import Sidebar from '@/components/Slidebar';
import NewChatModal from '@/components/NewChatModel';
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-full bg-black text-white font-inter relative">
  <Sidebar />
  <main className="flex-1 flex flex-col min-w-0">
    {children}
  </main>
  <NewChatModal />
</div>
      </body>
    </html>
  );
}