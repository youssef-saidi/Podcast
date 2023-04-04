import React from 'react'
import StatCard from '../../components/Dashboard/StatCard'
import UserColumn from '../../components/Dashboard/UserColumn'

const Users = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
         
            <StatCard icon={"/Images/user.png"} title={"Number of users"} number={356} color={"#ec4899"} />
            <div className="w-full mt-10 md:px-10 flex items-center justify-center font-sans md:overflow-hidden overflow-x-scroll  ">
                <div className="w-full">
                    <div className="bg-gray-500 shadow-md rounded my-6">
                        <table className=" w-full  ">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Name</th>
                                    <th className="py-3 px-6 text-center">Phone</th>
                                    <th className="py-3 px-6 text-center">Email</th>
                                    <th className="py-3 px-6 text-center">Status</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light  h-16 overflow-y-scroll    ">
                                <UserColumn />
                                <UserColumn />
                                <UserColumn />
                                <UserColumn />
                                <UserColumn />




                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
        )
}

export default Users