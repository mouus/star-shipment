'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { IoMdArrowRoundForward } from "react-icons/io";

export default function Sidebar() {
    const pathname = usePathname();
    const iscustomer = false;

    return (
        <div className='h-full'>
            <div className='flex justify-center'>
                <Link href={'/'}>
                    <h1 className="pt-4  font-semibold text-2xl shadow-text">
                        Star Shipment
                    </h1>
                </Link>
            </div>
            <div className='flex flex-col mt-16 px-2  font-semibold gap-4'>
                <Link
                    href="/dashboard"
                    className={`${pathname === '/dashboard' ? 'bg-amber-800' : ''} hover:bg-amber-800 py-2 pl-2 rounded-lg`}
                >
                    Dashboard
                </Link>
                {iscustomer ? (
                    <>
                        <Link
                            href="/posts"
                            className={`${pathname === '/posts' ? 'bg-amber-800' : ''} hover:bg-amber-800 py-2 pl-2 rounded-lg`}
                        >
                            Post for Supplies
                        </Link>
                        <Link
                            href="/inbox"
                            className={`${pathname === '/inbox' ? 'bg-amber-800' : ''} hover:bg-amber-800 py-2 pl-2 rounded-lg`}
                        >
                            Inbox
                        </Link>
                    </>
                ):(<>
                    <Link
                        href="/products"
                        className={`${pathname === '/products' ? 'bg-amber-800' : ''} hover:bg-amber-800 py-2 pl-2 rounded-lg`}>
                        List your products
                    </Link>
                    <Link
                        href="/orders"
                        className={`${pathname === '/orders' ? 'bg-amber-800' : ''} hover:bg-amber-800 py-2 pl-2 rounded-lg`}
                    >
                        Orders
                    </Link>
                    
                </>)}
            </div>
            <div className='flex mt-28 justify-center'>
                <div className='flex items-center gap-1 font-bold mt-10 hover:text-amber-800'>
                    <button>Logout</button>
                    <IoMdArrowRoundForward />
                </div>
            </div>
        </div>
    );
}
