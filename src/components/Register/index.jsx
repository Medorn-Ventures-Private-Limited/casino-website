import React from 'react'
import { RxCross2 } from "react-icons/rx";


const Register = ({closePopup}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center h-[100vh]   items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg  m-4 h-[90vh] overflow-auto">
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-bold'>Create Account</h1>
                <RxCross2 onClick={() => closePopup()} size={18} />
            </div>
            <div>
                <h6 className='text-lg font-semibold text-center'>Account</h6>

                <form action="">
                    <div className='mt-4'>
                    <label htmlFor="" className='text-sm text-gray-500'>Email address or player name</label>
                    <input type="text"
                       placeholder='Email or username'
                       className='border border-gray-300 p-2 rounded w-full mt-1'
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="" className='text-sm text-gray-500'>Password</label>
                    <input type="password"
                       placeholder='Password'
                       className='border border-gray-300 p-2 rounded w-full mt-1'
                    />
                </div>
                <h2 className='text-lg font-semibold text-center'>Personal</h2>
                <div className='mt-4'>
                    <label htmlFor="" className='text-sm text-gray-500'>Title</label>
                    <input type="text"
                       className='border border-gray-300 p-2 rounded w-full mt-1'
                    />
                </div>
                <div className='flex gap-4'>
                    <div className='mt-4'>
                        <label htmlFor="" className='text-sm text-gray-500'>First Name</label>
                        <input type="text"
                            className='border border-gray-300 p-2 rounded w-full mt-1'
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="" className='text-sm text-gray-500'>Last Name</label>
                        <input type="text"
                            className='border border-gray-300 p-2 rounded w-full mt-1'
                        />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='mt-4'>
                        <label htmlFor="" className='text-sm text-gray-500'>Zip</label>
                        <input type="text"
                            className='border border-gray-300 p-2 rounded w-full mt-1'
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="" className='text-sm text-gray-500'>Location</label>
                        <input type="text"
                            className='border border-gray-300 p-2 rounded w-full mt-1'
                        />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='mt-4'>
                        <label htmlFor="" className='text-sm text-gray-500'>Street</label>
                        <input type="text"
                            className='border border-gray-300 p-2 rounded w-full mt-1'
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="" className='text-sm text-gray-500'>House Number</label>
                        <input type="text"
                            className='border border-gray-300 p-2 rounded w-full mt-1'
                        />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='mt-4 w-full'>
                        <label htmlFor="" className='text-sm text-gray-500'>Date of Birth</label>
                        <input type="date"
                            className='border border-gray-300 p-2 rounded w-full mt-1'
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="" className='text-sm text-gray-500'>Place of Birth</label>
                        <input type="text"
                            className='border border-gray-300 p-2 rounded w-full mt-1'
                        />
                    </div>
                </div>
                <div className='mt-4'>
                    <label htmlFor="" className='text-sm text-gray-500'>Phone</label>
                    <input type="text"
                        className='border border-gray-300 p-2 rounded w-full mt-1'
                    />
                </div>

                
                </form>
                <button className='w-full text-white py-2 rounded mt-3 bg-[#555555]'>Register</button>
            </div>
          
          
        </div>
    </div>

  )
}

export default Register