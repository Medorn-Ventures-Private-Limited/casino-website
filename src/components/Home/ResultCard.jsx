import React from 'react'

const ResultCard = ({result}) => {
 

  return (
    <div className='bg-white text-center p-7 rounded-2xl mt-7 shadow-xl lg:w-1/2 '>
      <h1 className='text-1xl font-bold'>Latest Result</h1>
      <div className='flex flex-wrap justify-center gap-4 mt-5  mx-auto  lg:w-80'>
            
        {result.map((item, index) => (
          <div
            key={index}
            className="h-16 w-16 rounded-full text-2xl flex items-center justify-center font-bold text-[#024AAD] bg-[#CEE5FF] border-5 border-[#0088FF]"
          >
            {item.resultNo}
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default ResultCard