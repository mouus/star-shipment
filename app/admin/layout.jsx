import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'

export default function 
AdminLayout({children}) {
  return (
    <div className='max-h-screen flex'>
    <div className='h-full w-72 fixed inset-y-0 z-[80]bg-gradient-to-t from-amber-300 to-slate-900'>
      <AdminSidebar />
    </div>
    <main className='flex-1 pl-72'>
      {children}
    </main>
  </div>
  )
}
