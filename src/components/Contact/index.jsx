import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Contact = ({closePopup}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center h-[100vh]">
        <div className="bg-[#0088ff] p-6 rounded-lg shadow-lg w-96 text-center m-4 text-white">
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold'>Contact Information</h1>
            <RxCross2 onClick={() => closePopup()} size={18} />

          </div>
          
          <div className="flex flex-col items-center gap-6 w-full">
    
      <div className="flex flex-col items-center text-center gap-3  mt-2 lg:flex-row lg:items-center lg:text-left lg:gap-6">
        <FaPhoneAlt  className="text-2xl text-white" />
        <div>
          <h3 className="text-lg font-semibold">Phone</h3>
          <h5 className="text-sm">7362846383</h5>
          <h5 className="text-xs ">Monday to Friday, 9Am to 6Pm AEST</h5>
        </div>
      </div>

      
      <div className="flex flex-col items-center text-center gap-3  mt-2 lg:flex-row lg:items-center lg:text-left lg:gap-6">
        <MdEmail className="text-2xl text-white" />
        <div>
          <h3 className="text-lg font-semibold">Email</h3>
          <h5 className="text-sm underline">support@lottery.com</h5>
          <h5 className="text-xs ">Monday to Friday, 9Am to 6Pm AEST</h5>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-3  mt-2 lg:flex-row lg:items-center lg:text-left lg:gap-6">
        <IoLocationSharp className="text-2xl text-white" />
        <div>
          <h3 className="text-lg font-semibold">Office</h3>
          <h5 className="text-sm">123 Lottery St, Melbourne, VIC 3000</h5>
          <h5 className="text-xs ">By appointment only</h5>
        </div>
      </div>
    </div>
        </div>
    </div>

  )
}

export default Contact