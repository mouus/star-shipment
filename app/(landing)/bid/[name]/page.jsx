'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaFilePdf } from 'react-icons/fa';

export default function Bid({ params }) {
  const [customer, setCustomer] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState(''); // Separate state for amount
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const decodedName = decodeURIComponent(params.name);

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

    const foundCustomer = customers.find(customer => customer.name === decodedName);

    if (foundCustomer) {
      setCustomer(foundCustomer);
    } else {
      setCustomer(null);
    }
  }, [params.name]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (selectedProduct && price && amount) {
      alert(`Bid submitted for ${selectedProduct} at $${price} for ${amount}`);
    } else {
      alert('Please select a product, enter a price, and specify the amount.');
    }

    if (selectedFile) {
      console.log('File selected:', selectedFile);
    } else {
      alert('Please upload a quotation.');
    }
  };

  if (!customer) {
    return <div>Customer not found.</div>;
  }

  return (
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

      <div className='bg-slate-950/40 max-w-xl sm:max-w-2xl lg:max-w-4xl rounded-md py-4 sm:pb-5 mx-auto mt-8'>
        <div className='flex items-center gap-4 sm:gap-6 p-4'>
          <Image
            className='rounded-full bg-white'
            src={customer.image}
            alt={customer.name}
            width={50}
            height={50}
          />
          <h1 className='font-semibold text-lg sm:text-xl'>{customer.name}</h1>
        </div>
        <div className="px-4 py-2">
          <p className="text-base sm:text-lg">{customer.description}</p>
        </div>
        <div className='py-4 px-4'>
          <p className='font-bold text-lg mb-2'>Bid Your Price:</p>
          <div className='flex flex-col gap-4'>
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                className='border p-2 rounded-md'
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                <option value=''>Select Product</option>
                <option value='Coconuts'>Coconuts</option>
                <option value='Bananas'>Bananas</option>
                <option value='Pineapples'>Pineapples</option>
              </select>
              <input
                className='border p-2 rounded-md'
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                className='border p-2 rounded-md'
                type='number'
                placeholder='Enter Amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className='flex items-center gap-4'>
              <p className="text-sm sm:text-base">Upload quotation:</p>
              <input
                type="file"
                accept="application/pdf"
                id="pdf-upload"
                className="hidden"
                onChange={handleFileChange}
              />
              <label htmlFor="pdf-upload" className="cursor-pointer">
                <FaFilePdf className="text-3xl text-amber-800" />
                {selectedFile && <span className="ml-2 text-sm">{selectedFile.name}</span>}
              </label>
            </div>
          </div>

          <div className='mt-6'>
            <button
              className='bg-amber-800 text-white p-3 rounded-md w-full sm:w-auto'
              onClick={handleSubmit}
            >
              Submit Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
