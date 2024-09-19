'use client'
import React, { useState } from 'react';

export default function Page() {
  // Sample data for demonstration purposes
  const postContent = "This is the content of the post. It could be a description of the order or any relevant information.";
  
  // State to manage bids
  const [bids, setBids] = useState([
    { id: 1, bidderName: 'John Doe', bidAmount: '$1000', isAccepted: false },
    { id: 2, bidderName: 'Jane Smith', bidAmount: '$1200', isAccepted: false },
    { id: 3, bidderName: 'Bob Johnson', bidAmount: '$1100', isAccepted: false },
  ]);

  // Function to handle bid acceptance
  const acceptBid = (id) => {
    setBids(bids.map(bid => 
      bid.id === id ? { ...bid, isAccepted: true } : bid
    ));
  };

  return (
    <div className='pl-10 pt-10 pr-5'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Orders</h1>
      </div>    
      <div className='mt-6'>
        <p className='text-lg mb-4'>{postContent}</p>

        <div className='bg-gray-100 p-4 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>Bids</h2>
          <ul>
            {bids.map((bid) => (
              <li 
                key={bid.id} 
                className={`p-2 mb-2 border ${bid.isAccepted ? 'border-green-500' : 'border-gray-300'} rounded-md`}
              >
                <div className='flex justify-between items-center'>
                  <span className='font-medium'>{bid.bidderName}</span>
                  <span className='text-lg'>{bid.bidAmount}</span>
                </div>
                <div className={`text-sm ${bid.isAccepted ? 'text-green-600' : 'text-gray-600'}`}>
                  {bid.isAccepted ? 'Accepted' : 'Pending'}
                </div>
                {!bid.isAccepted && (
                  <button
                    className='mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600'
                    onClick={() => acceptBid(bid.id)}
                  >
                    Accept
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
