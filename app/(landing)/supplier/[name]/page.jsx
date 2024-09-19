'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';

export default function Supplier({ params }) {
  const [supplier, setSupplier] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // Number of products to display per page
  const [selectedProduct, setSelectedProduct] = useState('');
  const [orderAmount, setOrderAmount] = useState('');

  useEffect(() => {
    const decodedName = decodeURIComponent(params.name);

    const items = [
      { id: 1, src: "/img/goods.png", supplier: "Supplier Name 1", rating: 4, products: [{ name: 'Coconut', amount: 100, price: 10 }, { name: 'Apple', amount: 200, price: 15 }] },
      { id: 2, src: "/img/goods.png", supplier: "Supplier Name 2", rating: 5, products: [{ name: 'Banana', amount: 150, price: 12 }, { name: 'Mango', amount: 100, price: 20 }] },
      // Add more items with corresponding products as needed
    ];

    const foundSupplier = items.find(item => item.supplier === decodedName);

    if (foundSupplier) {
      setSupplier(foundSupplier);
      setProducts(foundSupplier.products);
    } else {
      setSupplier(null);
    }
  }, [params.name]);

  // Calculate current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOrderSubmit = () => {
    console.log(`Ordering ${orderAmount} of ${selectedProduct} from ${supplier.supplier}`);
    // Implement order submission logic here
  };

  if (!supplier) {
    return <div>Supplier not found.</div>;
  }

  return (
    <div className=''>
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
      <div className='bg-white max-w-3xl rounded-md py-2 mx-auto mt-16'>
        <div className='flex gap-2 px-2 py-2 items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image
              className='rounded-full'
              src={supplier.src}
              alt={supplier.supplier}
              width={40}
              height={40}
            />
            <h1 className='font-semibold text-lg'>{supplier.supplier}</h1>
          </div>
          <div className='flex gap-2 px-2 py-2 items-center'>
            <h2 className='font-semibold'>Rating:</h2>
            <div className='flex items-center'>
              {Array.from({ length: supplier.rating }, (_, index) => (
                <AiFillStar key={index} className="text-yellow-500" />
              ))}
              {Array.from({ length: 5 - supplier.rating }, (_, index) => (
                <AiFillStar key={index} className="text-gray-300" />
              ))}
            </div>
          </div>
        </div>
        <div className='flex gap-2 items-center mt-5 ml-3'>
          <p className='font-semibold text-md'>Supplier Legal Certificates:</p>
          <Link href={"#"} target="_blank" className='text-blue-500 text-xs'>click to view</Link>
        </div>
      </div>
      <div className='mx-auto md:ml-32 mt-8 font-semibold text-lg'>
        Products
      </div>
      <div className='flex justify-center mt-4 overflow-x-auto'>
        {products.length > 0 ? (
          <table className='w-full max-w-3xl bg-white border border-gray-200 text-sm'>
            <thead>
              <tr>
                <th className='py-2 px-3 text-left'>Product Name</th>
                <th className='py-2 px-3 text-left'>Available Amount</th>
                <th className='py-2 px-3 text-left'>Price</th>
                <th className='py-2 px-3 text-left'>Order Amount</th>
                <th className='py-2 px-3 text-left'>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, index) => (
                <tr key={index} className='border-t'>
                  <td className='py-2 px-3'>{product.name}</td>
                  <td className='py-2 px-3'>{product.amount}</td>
                  <td className='py-2 px-3'>${product.price}</td>
                  <td className='py-2 px-3'>
                    <input
                      type='number'
                      placeholder='Order Amount'
                      value={selectedProduct === product.name ? orderAmount : ''}
                      onChange={(e) => {
                        setSelectedProduct(product.name);
                        setOrderAmount(e.target.value);
                      }}
                      className='border px-2 py-1 rounded w-full'
                    />
                  </td>
                  <td className='py-2 px-3'>
                    <button
                      onClick={handleOrderSubmit}
                      className='bg-blue-500 text-white px-4 py-1 rounded'
                    >
                      Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='text-center'>No products available for this supplier.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center mt-4'>
        <ul className='flex space-x-2'>
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
