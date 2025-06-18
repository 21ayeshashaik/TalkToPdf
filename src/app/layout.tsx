import './globals.css';
import Sidebar from '@/components/Slidebar';
import NewChatModal from '@/components/NewChatModel';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-full bg-black text-white font-inter relative">
          {/* Sidebar on the left with outer left padding (gap from screen edge) */}
          <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-12 ">
            <Sidebar />
          </div>
          {/* Main content */}
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <NewChatModal />
        </div>
      </body>
    </html>
  );
}