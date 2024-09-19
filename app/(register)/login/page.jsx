import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div className="mb-16 ">
      <div>
        <div>
          <div className="flex py-4 items-center bg-slate-950/40 justify-between">
            <Link href="/">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl ml-4 shadow-text">
                Star Shipment
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4 ml-24 pb-2">
        <div>
          <h2 className="mb-3 font-semibold text-lg">
            Login to your account
          </h2>
          <div className="max-w-lg min-h-80 shadow-md shadow-black/30 rounded-lg bg-slate-950/40 p-6">
            <form>
              <div className='mb-4'>
                <label htmlFor="business-name" className="block  text-sm font-bold mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business-name"
                  name="businessName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your business name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block  text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-slate-950 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </div>
              <div>
                <p className="text-gray-700 text-xs mt-3">
                  Don't have an account ?{" "} <Link href={"/register"} className="text-black">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
