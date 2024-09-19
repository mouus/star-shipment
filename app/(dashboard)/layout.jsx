import React from 'react';
import Sidebar from '../../components/Sidebar';

export default function DashboardLayout({children}) {
  return (
    <div className='h-lvh flex'>
      <div className='h-full w-72 fixed inset-y-0 z-[80] bg-gradient-to-b from-amber-500 to-amber-200 flex-shrink-0'>
        <Sidebar />
      </div>
      <main className='flex-1 pl-72'>
        {children}
      </main>
    </div>
  );
}
