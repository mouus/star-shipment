'use client'
import React, { useState } from 'react';

export default function Page() {
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [productPrice, setProductPrice] = useState('');

    const handleImageUpload = (e) => {
        setProductImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            productName,
            productImage,
            productPrice,
        });
        // Reset form fields
        setProductName('');
        setProductImage(null);
        setProductPrice('');
    };

    return (
        <div className='pl-10 pt-10 pr-5'>
            <h1 className='text-2xl font-semibold'>List Your Products</h1>
            <form onSubmit={handleSubmit} className='mt-5'>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>
                        Product Name
                    </label>
                    <input
                        type='text'
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className='mt-1 p-2 border border-gray-300 rounded w-full'
                        placeholder='Enter product name'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>
                        Product Image
                    </label>
                    <input
                        type='file'
                        onChange={handleImageUpload}
                        className='mt-1 p-2 border border-gray-300 rounded w-full'
                        accept='image/*'
                        required
                    />
                </div>
                <div className='mb-4 flex gap-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Product amount
                        </label>
                        <input
                            type='number'
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            className='mt-1 p-2 border border-gray-300 rounded w-full'
                            placeholder='Enter price'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Product Price
                        </label>
                        <input
                            type='number'
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            className='mt-1 p-2 border border-gray-300 rounded w-full'
                            placeholder='Enter price'
                            required
                        />
                    </div>

                </div>
                <button
                    type='submit'
                    className='px-4 py-2 bg-amber-800 text-white rounded hover:bg-amber-600'>
                    Submit
                </button>
            </form>
        </div>
    );
}
