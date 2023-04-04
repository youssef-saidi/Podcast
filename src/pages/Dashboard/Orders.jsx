import React from 'react'
import OrderColumn from '../../components/Dashboard/OrderColumn'
import StatCard from '../../components/Dashboard/StatCard'

const Orders = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">

            <StatCard icon={"/Images/chariot.svg"} title={"Number of Orders"} number={356} color={"#3b82f6"} />    <div className="w-full mt-10 md:px-10 flex items-center justify-center font-sans md:overflow-hidden overflow-x-scroll  ">
                <div className="w-full">
                    <div className="bg-gray-500 shadow-md rounded my-6">
                        <table className=" w-full  ">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Reference</th>
                                    <th className="py-3 px-6 text-center">Price</th>
                                    <th className="py-3 px-6 text-center">Deliver</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light  h-16 overflow-y-scroll    ">
                                <OrderColumn />
                                <OrderColumn />
                                <OrderColumn />






                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders