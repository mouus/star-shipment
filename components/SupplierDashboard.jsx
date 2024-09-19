'use client'
import React, { useState } from 'react';

export default function SupplierDashboard() {
  const [products, setProducts] = useState([
    { name: 'Product 1', price: '$100', stock: 50 },
    { name: 'Product 2', price: '$150', stock: 30 },
    { name: 'Product 3', price: '$200', stock: 20 },
    { name: 'Product 4', price: '$250', stock: 10 },
  ]);

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div className='p-5'>
      <h2 className='text-lg font-semibold mb-4'>Products List</h2>
      <div className='border max-w-3xl'>
        <table className='min-w-full bg-white border-collapse'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>Product Name</th>
              <th className='py-2 px-4 border-b'>Price</th>
              <th className='py-2 px-4 border-b'>Stock</th>
              <th className='py-2 px-4 border-b'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className='py-2 px-4 border-b'>{product.name}</td>
                <td className='py-2 px-4 border-b'>{product.price}</td>
                <td className='py-2 px-4 border-b'>{product.stock}</td>
                <td className='py-2 px-4 border-b'>
                  <button
                    className='bg-red-600 text-white py-1 px-3 rounded hover:bg-red-500'
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
