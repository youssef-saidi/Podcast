import React from 'react'

const StatCard = ({icon,title,number,color}) => {
  return (
    <div className='relative bg-white text-black py-9 px-7 flex flex-col w-64 h-32 shadow-md rounded-lg md:mt-16 mt-24'>
      <div className='absolute -left-2 -top-2  text-white py-7 px-7 flex flex-col w-20 shadow-md rounded-lg ' style={{background:color}}>
        <img src={icon} alt="" />
      </div>
      <div className='absolute right-5 top-10 font-bold text-gray-900 flex flex-col justify-center'>
        <h1 className='font-thin  text-lg text-right'>{title}</h1>
        <h2  className='font-semibold  text-2xl'>{number}</h2>
      </div>
    </div>
  )
}

export default StatCard