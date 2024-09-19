'use client';

import React, { useState } from 'react';

export default function Page() {
  const [orders, setOrders] = useState([
    { businessName: 'Business A', item: 'Item 1', price: '$100', qty: 10, status: 'Sent' },
    { businessName: 'Business B', item: 'Item 2', price: '$150', qty: 5, status: 'Pending' },
    { businessName: 'Business C', item: 'Item 3', price: '$200', qty: 8, status: 'Pending' },
  ]);

  const handleStatusChange = (index) => {
    const updatedOrders = orders.map((order, i) =>
      i === index && order.status === 'Pending' ? { ...order, status: 'Sent' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className='pl-10 pt-10 pr-5'>
      <h1 className='text-2xl font-semibold'>Orders</h1>
      <div className='mt-5'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>Business Name</th>
              <th className='py-2 px-4 border-b'>Ordered Item</th>
              <th className='py-2 px-4 border-b'>Price</th>
              <th className='py-2 px-4 border-b'>Quantity</th>
              <th className='py-2 px-4 border-b'>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className='py-2 px-4 border-b'>{order.businessName}</td>
                <td className='py-2 px-4 border-b'>{order.item}</td>
                <td className='py-2 px-4 border-b'>{order.price}</td>
                <td className='py-2 px-4 border-b'>{order.qty}</td>
                <td className='py-2 px-4 border-b'>
                  {order.status === 'Pending' ? (
                    <button
                      className='bg-amber-800 text-white py-1 px-3 rounded hover:bg-amber-500'
                      onClick={() => handleStatusChange(index)}
                    >
                      Mark as Sent
                    </button>
                  ) : (
                    <span className='text-amber-600 font-semibold'>{order.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
