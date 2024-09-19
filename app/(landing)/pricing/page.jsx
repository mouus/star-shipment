import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Pricing() {
    return (
        <div className="overflow-x-hidden max-w-full">
            <div className="bg-slate-950/40">
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

            <div className="flex justify-center container mx-auto mt-10 px-4">
                <div className="max-w-xl">
                    <h2 className="font-semibold text-3xl text-amber-500">
                        Our Pricing
                    </h2>
                    <p className="mt-4 text-sm">
                        For MVR 500 per month, our platform connects businesses with top suppliers, offering efficient supply chain management, real-time inventory tracking, automated order processing, and personalized support to optimize your operations.
                    </p>

                    <div className="flex justify-end mt-10">
                        <Link href="/register" className="bg-amber-500 px-4 py-2 font-semibold text-slate-50 rounded-md shadow-md shadow-black/20">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
