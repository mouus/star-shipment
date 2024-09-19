import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SellerRegister() {
  return (
    <div className="">
      <div>
      <div className="flex py-4 items-center bg-slate-950/40 justify-between">
            <Link href="/">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl ml-4 shadow-text">
                Star Shipment
              </h1>
            </Link>
      </div>
      </div>
      <div className="mt-4 ml-24 pb-2">
        <div>
          <h2 className="mb-3 font-semibold text-lg">
            Register To Be A Seller
          </h2>
          <div className="max-w-lg min-h-80 shadow-md shadow-black/30 rounded-lg bg-white p-6">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="business-registry">
                  Business Registry PDF
                </label>
                <input
                  type="file"
                  id="business-registry"
                  name="business-registry"
                  accept=".pdf"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="owner-id">
                  Owner ID Card PDF
                </label>
                <input
                  type="file"
                  id="owner-id"
                  name="owner-id"
                  accept=".pdf"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className='py-1'>
                <p className='text-slate-600 text-xs'>You will recive a mail once the information is confirmed</p>
              </div>
              <button
                type="submit"
                className="bg-slate-950 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
