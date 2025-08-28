import React from 'react'

const Card = ({title, content}) => {
  return (
    <div>
      <div className=' shadow-lg px-4 mt-7 py-10 lg:px-10 '>
        <h1 className='text-[#0B4D91] text-2xl leading-tight font-bold'>{title}</h1>
        <div>{content}</div>
      </div>
    </div>
  )
}

export default Card