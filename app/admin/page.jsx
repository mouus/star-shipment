import React from 'react';

export default function Page() {
  const sellers = [
    {
      businessName: 'Business 1',
      idCard: '/path/to/idcard1.pdf',
      registration: '/path/to/registration1.pdf',
    },
    {
      businessName: 'Business 2',
      idCard: '/path/to/idcard2.pdf',
      registration: '/path/to/registration2.pdf',
    },
  ];

  return (
    <div className="pl-10 pt-10 pr-5">
      <div className="text-2xl font-semibold">Approve Sellers</div>

      <div className="mt-5">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Business Name</th>
              <th className="py-2 px-4 border-b">ID Card</th>
              <th className="py-2 px-4 border-b">Business Registration</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{seller.businessName}</td>
                <td className="py-2 px-4 border-b">
                  <a
                    href={seller.idCard}
                    download
                    className="text-blue-600 hover:underline"
                  >
                    Download ID Card
                  </a>
                </td>
                <td className="py-2 px-4 border-b">
                  <a
                    href={seller.registration}
                    download
                    className="text-blue-600 hover:underline"
                  >
                    Download Registration
                  </a>
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    Approve
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
