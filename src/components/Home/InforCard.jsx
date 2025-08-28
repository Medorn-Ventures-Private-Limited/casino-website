import React from 'react'

const InforCard = ({infoData}) => {
  return (
    <div className='lg:p-10'>
      {infoData.map((info, index) => (
        <div
          key={index}
          className='bg-[#23333C] flex flex-col md:flex-row items-center md:items-start p-10 md:p-10 mt-8 shadow-xl text-white rounded-xl gap-4'
        >
          <div className='h-16 w-16 flex-shrink-0'>
            <svg viewBox="0 0 24 24" className='w-full h-full'>
              <path fill="#05a8ff" d="M12 1 1 12l11 11 11-11z"></path>
              <path d="M12 6v7" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path>
              <circle cx="12" cy="17" r="1.6" fill="#fff"></circle>
           </svg>
          </div>
          <div className='mt-4 md:mt-0 text-center md:text-left'>
            <h1 className='text-xl font-bold uppercase'>{info.title}</h1>
            <h6 className='text-sm mt-2'>{info.text}</h6>
         </div>
        </div>
      ))}    
    </div>
  )
}

export default InforCard