import React from 'react';

export default function CustomerDashboard() {
  // Sample data for demonstration purposes
  const orders = [
    { businessName: 'Acme Corp', orderItem: 'Widgets', status: 'Shipped' },
    { businessName: 'Globex Inc.', orderItem: 'Gizmos', status: 'Processing' },
    { businessName: 'Initech', orderItem: 'Doohickeys', status: 'Delivered' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Customer Orders</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Business Name</th>
            <th className="py-2 px-4 border-b">Order Item</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{order.businessName}</td>
              <td className="py-2 px-4 border-b">{order.orderItem}</td>
              <td className="py-2 px-4 border-b">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
