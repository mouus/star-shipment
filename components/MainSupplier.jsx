'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function MainSupplier() {
    const customers = [
        { id: 1, name: 'Customer 1', image: '/img/goods.png', description: 'We are looking for 100 coconuts' },
        { id: 2, name: 'Customer 2', image: '/img/goods.png', description: 'We are looking for 200 bananas' },
        { id: 3, name: 'Customer 3', image: '/img/goods.png', description: 'We are looking for 300 pineapples' },
        { id: 4, name: 'Customer 4', image: '/img/goods.png', description: 'We are looking for 150 oranges' },
        { id: 5, name: 'Customer 5', image: '/img/goods.png', description: 'We are looking for 400 apples' },
        { id: 6, name: 'Customer 6', image: '/img/goods.png', description: 'We are looking for 500 lemons' },
        { id: 7, name: 'Customer 7', image: '/img/goods.png', description: 'We are looking for 600 strawberries' },
        { id: 8, name: 'Customer 8', image: '/img/goods.png', description: 'We are looking for 700 grapes' },
        { id: 9, name: 'Customer 9', image: '/img/goods.png', description: 'We are looking for 800 watermelons' },
        { id: 10, name: 'Customer 10', image: '/img/goods.png', description: 'We are looking for 900 mangoes' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const customersPerPage = 3;

    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

    const totalPages = Math.ceil(customers.length / customersPerPage);

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
        <div className="px-4 sm:px-0">
            <div>
                <div className="flex flex-col sm:flex-row py-4 items-center bg-slate-950/40 justify-between">
                    <Link href="/">
                        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl sm:ml-4 shadow-text text-center sm:text-left">
                            Star Shipment
                        </h1>
                    </Link>

                    <div className="flex gap-4 sm:gap-6 sm:mr-4 mt-4 sm:mt-0">
                        <Link href="/dashboard" className="text-sm sm:text-base">Dashboard</Link>
                    </div>
                </div>
            </div>

            <div className="mt-8 sm:mt-16">
                {currentCustomers.map((customer) => (
                    <div key={customer.id} className='mb-4 sm:ml-52'>
                        <div className='bg-slate-950/40 max-w-full sm:max-w-4xl rounded-md py-2'>
                            <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start'>
                                <div className='flex items-center px-4 pt-2 gap-2'>
                                    <Image className='rounded-full bg-white' src={customer.image} width={40} height={40} alt={`${customer.name} image`} />
                                    <h2 className='font-bold ml-2'>{customer.name}</h2>
                                </div>
                                
                                <div className='text-white sm:mr-3 mt-2 sm:mt-0'>
                                    <Link href={`/bid/${customer.name}`}>
                                        <p className='text-xs cursor-pointer hover:text-black'>Click here to bid</p>
                                    </Link>
                                </div>
                            </div>

                            <div className='py-2 font-semibold sm:ml-24 text-center sm:text-left'>
                                <p>{customer.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mr-2 ${currentPage === 1 ? 'text-gray-400' : 'text-slate-950'}`}>
                    Previous
                </button>
                <span className="text-slate-800">{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 ml-2 ${currentPage === totalPages ? 'text-gray-400' : 'text-slate-950'}`}>
                    Next
                </button>
            </div>
        </div>
    );
}
