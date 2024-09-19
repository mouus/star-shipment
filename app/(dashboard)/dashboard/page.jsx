import Link from 'next/link'
import React from 'react'
import CustomerDashboard from '../../../components/CustomerDashboard'
import SupplierDashboard from '../../../components/SupplierDashboard'

export default function page() {
    const customer = true

    return (
        <div className='pl-10 pt-10 pr-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Dashboard</h1>
                {customer && (
                    <div className=''>
                        <Link href={'/seller_register'} className='bg-amber-800 text-white px-4 py-2 rounded-lg'>Become a seller</Link>
                    </div>
                )}
                {!customer && (
                    <div className=''>
                        <h1 className='text-amber-800 font-bold text-xs'>Seller Approved</h1>
                    </div>
                )}

            </div>
            <div className='mt-10'>
                {customer ? <CustomerDashboard /> : <SupplierDashboard />}
            </div>
        </div>
    )
}
