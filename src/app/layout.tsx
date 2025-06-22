import './globals.css';
import Sidebar from '@/components/Slidebar';
import NewChatModal from '@/components/NewChatModel';
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="flex h-screen w-full text-white font-inter relative bg-black">
          {/* Sidebar with responsive padding */}
          <div className="
            pl-1 md:pl-4 lg:pl-8 
            pt-2 pb-2 sm:pt-3 sm:pb-3 
            md:pt-4 md:pb-4 
            lg:pt-6 lg:pb-6
          ">
            <Sidebar />
          </div>

          {/* Main content */}
          <main className="flex-1 flex flex-col min-w-0 px-1 sm:px-2 md:px-8 lg:px-12">
            {children}
          </main>

          <NewChatModal />
        </div>
      </body>
    </html>
  );
}
