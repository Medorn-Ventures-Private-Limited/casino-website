import React, { useState } from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const RestructionPopup = ({}) => {
    const [showPopup, setShowPopup] = useState(true);

    const handleContinue = () => {
        setShowPopup(false);
    };
    const handleDecline = () => {
      alert("You must be 18+ to access this site.");
      window.location.href = "https://google.com";
    };

    if (!showPopup) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center h-[100vh] backdrop-blur-sm">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center m-4 text-black flex flex-col  items-center ">
            <div className='w-20 h-20 rounded-full border-5 text-red-600 text-xl text-bold border-red-600  flex items-center justify-center'>
                <h4 className='text-2xl font-bold'>18+</h4>


            </div>
            <h1 className='text-2xl font-bold  mt-5'>Age-Restricted Content</h1>
            <h6 className='text-sm mt-4 text-center'>This site is intended for <span className='font-bold'>adults 18 years or older</span>.
            Please confirm your age to continue</h6>
            <h6 className='text-sm mt-4 text-center'>By clicking Continue you agree to our <span className='text-blue-500 underline cursor-pointer'>Terms & Privacy Policy.</span></h6>
            <div onClick={handleContinue} className='flex gap-3 mt-5'>
                <button className='px-3 py-2  rounded bg-amber-400 text-xl font-bold flex items-center gap-3'>
                    Continue
                    <IoMdCheckmark  size={24} className=''/>
                </button>
                <button onClick={handleDecline} className='px-3 py-2 rounded bg-amber-400 text-xl font-bold flex items-center gap-3'>Decline
                    <RxCross2  size={24} className='' />
                </button>
            </div>
          
        </div>
    </div>

  )
}

export default RestructionPopup