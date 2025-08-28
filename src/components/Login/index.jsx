import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Login = ({closePopup}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 h-[100vh] z-50 bg-black/50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 m-4 ">
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-bold'>Login</h1>
                <RxCross2 onClick={() => closePopup()} size={18} />
            </div>
            <div>
                <h6 className='text-sm text-gray-500'>Access your account and stay in the game! Log in to lotterydrops.com to check tickets, manage your balance and track winnings.</h6>

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
                <div className='flex gap-4 mt-4'>
                    <input 
                        type="checkbox" 
                        id="agree" 
                        className="w-4 h-4 accent-blue-500" 
                    />
                    <h6 className='text-sm text-gray-500'>I agree with the Lottery Drops policies and data processing.</h6>
                    
                </div>
                </form>
                <button className='w-full text-white py-2 rounded mt-3 bg-[#555555]'>Login</button>
                <h6 className='text-sm text-gray-500 text-center mt-2 '>Don't have an account? <span className='text-blue-500 cursor-pointer underline'>Sign up</span></h6>
            </div>
          
          
        </div>
    </div>

  )
}

export default Login