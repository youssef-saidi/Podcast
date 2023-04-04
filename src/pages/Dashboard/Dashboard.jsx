import React from 'react'
import StatCard from '../../components/Dashboard/StatCard'

const Dashboard = () => {
  return (
    <section className='flex flex-col justify-center md:mt-36 mt-48'>
      {/* <h1 className='font-bold md:text-4xl text-3xl text-gray-800 ml-3'>Welcome User</h1> */}
      <div className='grid md:grid-cols-3 grid-cols-1 justify-items-center gap-4 my-auto '>
        <div className='relative md:-top-10 md:-left-5'><StatCard icon={"/Images/user.png"} title={"Number of users"} number={356} color={"#ec4899"} /></div>
        <StatCard icon={"/Images/product.png"} title={"Number of Products"} number={61} color={"#a855f7"} />
        <div className='relative md:-top-10 md:-right-5'> <StatCard icon={"/Images/chariot.svg"} title={"Number of Orders"} number={26} color={"#3b82f6"} /></div>
      </div>
    </section>
  )
}

export default Dashboard