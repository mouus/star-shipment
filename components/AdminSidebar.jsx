'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { IoMdArrowRoundForward } from "react-icons/io";

export default function AdminSidebar() {
    const pathname = usePathname();


    return (
        <div className='h-full'>
            <div className='flex justify-center'>
                <Link href={'/admin'}>
                    <h1 className="pt-4 text-slate-50 font-semibold text-2xl shadow-text">
                        Star Shipment
                    </h1>
                </Link>
            </div>
            <div className='flex flex-col mt-16 px-2 text-slate-50 font-semibold gap-4'>
                <Link
                    href="/admin"
                    className={`${pathname === '/admin' ? 'bg-cyan-800' : ''} hover:bg-cyan-800 py-2 pl-2 rounded-lg`}
                >
                    Dashboard
                </Link>
            </div>
            <div className='flex h-full justify-center'>
                <div className='flex items-center gap-1 text-white font-bold mt-10'>
                    <button>Logout</button>
                    <IoMdArrowRoundForward />
                </div>
            </div>
        </div>
    );
}
