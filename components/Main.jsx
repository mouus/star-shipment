'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

export default function Main() {
    const items = [
        { id: 1, src: "/img/goods.png", supplier: "Supplier Name 1", rating: 4 },
        { id: 2, src: "/img/goods.png", supplier: "Supplier Name 2", rating: 5 },
        { id: 3, src: "/img/goods.png", supplier: "Supplier Name 3", rating: 3 },
        { id: 4, src: "/img/goods.png", supplier: "Supplier Name 4", rating: 4 },
        { id: 5, src: "/img/goods.png", supplier: "Supplier Name 5", rating: 5 },
        { id: 6, src: "/img/goods.png", supplier: "Supplier Name 6", rating: 4 },
        { id: 7, src: "/img/goods.png", supplier: "Supplier Name 7", rating: 2 },
        { id: 8, src: "/img/goods.png", supplier: "Supplier Name 8", rating: 3 },
        // Add more items as needed
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Number of items to display per page

    // Calculate the current items to display based on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div>
                <div className="flex flex-col sm:flex-row py-4 items-center bg-slate-950/40 justify-between">
                    <Link href="/">
                        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl ml-4 shadow-text text-center sm:text-left">
                            Star Shipment
                        </h1>
                    </Link>

                    <div className="flex gap-4 sm:gap-6 lg:mr-4 mt-4 sm:mt-0">
                        <Link href="/dashboard" className="text-sm sm:text-base">Dashboard</Link>
                    </div>
                </div>
            </div>
            <div className='px-5 sm:px-5'>
                    <div className='border md:ml-40 border-slate-950 mt-10 max-w-full md:max-w-3xl rounded-md'>
                <Link href={`/supplier/${items.supplier}`}>
                        <div className='p-5'>
                            <div className='flex flex-col sm:flex-row justify-between items-center'>
                                <div className='flex gap-2 items-center'>
                                    <Image className='rounded-full bg-white' src={"/img/goods.png"} width={40} height={40} />
                                    <h2 className='font-bold'>Supplier Name</h2>
                                </div>
                                <div className="flex items-center mt-4 sm:mt-0">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <AiFillStar key={index} className="text-yellow-700" />
                                    ))}
                                </div>
                            </div>
                            <div className='text-sm mt-5 sm:ml-20'>
                                <p>We sell 50 products at a reasonable rate.</p>
                            </div>
                        </div>
                </Link>
                    </div>


                <div className='mt-10 lg:ml-5 text-center sm:text-left'>
                    <h2 className='font-semibold text-xl'>Suppliers</h2>
                </div>

                <div className='mt-10 lg:px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto max-w-full'>
                    {currentItems.map((item) => (
                        <Link href={`/supplier/${item.supplier}`}>
                            <div
                                key={item.id}
                                className={`max-w-full md:max-w-xs rounded-md shadow-md shadow-black/30`}
                            >
                                <Image src={item.src} width={300} height={300} className='bg-white rounded-t-md w-full' />
                                <div className='bg-slate-950/20 rounded-b-md'>
                                    <p className='text-sm ml-2 p-2 font-semibold text-slate-950 '>{item.supplier}</p>
                                    <div className='flex items-center ml-4 py-1'>
                                        <p className='text-xs text-slate-950 font-semibold mr-2'>Rating:</p>
                                        <div className="flex items-center">
                                            {Array.from({ length: item.rating }, (_, index) => (
                                                <AiFillStar key={index} className="text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>

                <div className="flex justify-center mt-10 items-center pb-5">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-slate-700 text-white rounded-md disabled:bg-slate-500"
                    >
                        Previous
                    </button>
                    <p className="mx-4 text-slate-900">Page {currentPage} of {totalPages}</p>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-slate-700 text-white rounded-md disabled:bg-slate-500"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
