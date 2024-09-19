'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbSailboat } from "react-icons/tb";
import { FaUsers, FaShippingFast, FaMoneyCheckAlt } from "react-icons/fa";

export default function Landing() {
    const companies = [
        {
            name: 'Banana LLC',
            description: 'Looking for 100 bananas',
            image: '/img/goods.png',
        },
        {
            name: 'Apple Inc',
            description: 'Seeking suppliers for 500 apples',
            image: '/img/goods.png',
        },
        {
            name: 'Orange Co.',
            description: 'Needs 200 oranges urgently',
            image: '/img/goods.png',
        },
        {
            name: 'Grape Ventures',
            description: 'Looking to purchase 1000 grapes',
            image: '/img/goods.png',
        },
        {
            name: 'Mango Traders',
            description: 'In search of 300 ripe mangoes',
            image: '/img/goods.png',
        },
    ];

    const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentCompanyIndex((prevIndex) => (prevIndex + 1) % companies.length);
                setFade(true);
            }, 1000); // Duration of fade-out transition
        }, 3000); // Duration to show each company

        return () => clearInterval(interval);
    }, []);

    const currentCompany = companies[currentCompanyIndex];

    return (
        <div className="overflow-x-hidden max-w-full relative bg-[url(/img/resorts.png)] bg-cover bg-no-repeat text-white">
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10">
                <div className="flex py-4 items-center bg-black/70 justify-between">
                    <Link href="/">
                        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl ml-4 text-amber-500 shadow-amber-500">
                            Star Shipment
                        </h1>
                    </Link>

                    <div className="flex gap-4 sm:gap-6 lg:gap-10 mr-2 sm:mr-4 lg:mr-5">
                        <Link href="/pricing" className="text-sm sm:text-base text-amber-500">Pricing</Link>
                        <Link href="/login" className="text-sm sm:text-base text-amber-500">Login</Link>
                    </div>
                </div>
            </div>
            <div className="h-[150px] w-full sm:w-[700px] mt-10 ml-4 sm:ml-12 lg:ml-24 max-w-full relative z-10">
                <div className="flex items-center">
                    <div className="mt-6 sm:mt-8 lg:mt-10 max-w-xs sm:max-w-md lg:max-w-xl">
                        <h2 className="font-semibold text-2xl sm:text-2xl lg:text-3xl text-amber-500">
                            Welcome to Star Shipment
                        </h2>
                        <div>
                            <p className="mt-2 sm:mt-3 lg:mt-4 ml-1 text-xs sm:text-sm  text-white">
                                We uniquely bridge the gap between businesses and suppliers, providing unparalleled,
                                efficient connections that optimize supply chains and drive growth, setting the standard
                                for excellence and innovation in the industry.
                            </p>
                        </div>
                    </div>
                </div>
             
                <div className="flex justify-end items-end mt-8 sm:mt-10 mr-10 sm:mr-8 lg:mr-10">
                    <Link
                        href="/register"
                        className="bg-amber-500 px-3 py-2 sm:px-4 lg:px-6 sm:py-3 lg:py-4 font-semibold text-black rounded-md shadow-md shadow-amber-500/20 text-sm sm:text-base"
                    >
                        Register
                    </Link>
                </div>
            </div>
            <div className="hidden md:block absolute right-4 sm:right-12 lg:right-25 top-28">
                    <div className="mt-16 flex justify-center">
                        <div
                            className={`bg-black/70  max-w-4xl rounded-md py-4 px-6 transition-opacity duration-500 ${
                                fade ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    className="rounded-full border-2 border-amber-500"
                                    src={currentCompany.image}
                                    width={50}
                                    height={50}
                                    alt={`${currentCompany.name} Logo`}
                                />
                                <h2 className=" font-bold text-xl text-amber-500">{currentCompany.name}</h2>
                            </div>
                            <p className="font-semibold mt-2 ml-14 text-white">{currentCompany.description}</p>
                        </div>
                    </div>
                </div>
            <div className="mt-24 bg-white pt-5 sm:mt-32 lg:mt-40 px-2 sm:px-6 lg:px-10 max-w-full pb-5 relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-4 sm:mb-6 text-black">How Star Shipment Can Help You</h3>
                <div className="flex flex-col sm:flex-row justify-around gap-6 sm:gap-4 lg:gap-8">
                    <div className="text-center">
                        <FaUsers size={40} className="sm:size-50 lg:size-20 text-black mb-2 sm:mb-4" />
                        <h4 className="text-lg sm:text-xl font-semibold text-black">Connect with Suppliers</h4>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-black">
                            Easily connect with a wide network of suppliers to get the products you need quickly and efficiently.
                        </p>
                    </div>
                    <div className="text-center">
                        <FaShippingFast size={40} className="sm:size-50 lg:size-20 text-black mb-2 sm:mb-4" />
                        <h4 className="text-lg sm:text-xl font-semibold text-black">Speedy Shipments</h4>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-black">
                            Ensure fast and reliable shipments to keep your business running smoothly without delays.
                        </p>
                    </div>
                    <div className="text-center">
                        <FaMoneyCheckAlt size={40} className="sm:size-50 lg:size-20 text-black mb-2 sm:mb-4" />
                        <h4 className="text-lg sm:text-xl font-semibold text-black">Cost Efficiency</h4>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-black">
                            Get the best deals and save money on bulk orders with our competitive pricing and offers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
