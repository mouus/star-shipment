'use client';

import React, { useState } from 'react';

export default function Page() {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log('Input:', inputValue);
        // You can add more logic like clearing the textarea or sending the data to a server
    };

    return (
        <div className='pl-10 pt-10 pr-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Post</h1>
            </div>
            <div className='mt-5'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='block text-lg font-medium text-gray-700' htmlFor='product-input'>
                            Enter the product you are searching for and the amount you want:
                        </label>
                        <input
                            id='product-input'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                            placeholder='Enter product and amount'
                            required
                        />
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
