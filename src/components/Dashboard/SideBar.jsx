import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const SideBar = () => {
  const [ShowNav, setShowNav] = useState(true)
  const [DropDown, setDropDown] = useState(false)
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      setShowNav(false)
    } else {
      setShowNav(true)

    }
  })
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowNav(false)
    } else {
      setShowNav(true)

    }
  }, []);

  const openSidebar = () => {
    setShowNav(!ShowNav)
  }
  const dropdown = () => {
    setDropDown(!DropDown)
  }
  return (
    <section className="">
      <span className="absolute text-white text-4xl top-7 left-4  cursor-pointer md:hidden z-40" onClick={openSidebar}>
        <img src="/Images/hum.png" alt="" />
      </span>
      {ShowNav &&
        <div className="shadow-xl rounded-xl my-2 fixed top-0 bottom-0 lg:left-0 p-2 w-[250px] overflow-y-auto text-center bg-gray-900 z-40">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <h1 className="font-bold text-gray-200 text-[20px] ml-3">SiteTitle</h1>
              <span
                className="cursor-pointer ml-24 md:hidden"
                onClick={openSidebar}
              >
                <img src="/Images/close.png" alt="" />
              </span>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>

          <Link to={"/dashboard"} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-pink-500 text-white">
            <img src="/Images/dash.png" className='w-6 h-6' alt="" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</span>
          </Link>

          <Link to={"/dashboard/users"} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-pink-500 text-white">
            <img src="/Images/user.png" className='w-6 h-6' alt="" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Users</span>
          </Link>

          <div className="my-4 bg-gray-600 h-[1px]"></div>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-pink-500 text-white"
            onClick={dropdown}
          >
            <img src="/Images/shop.png" className='w-6 h-6' alt="" />
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">My Shop</span>
              <span >
                <img src="/Images/down.png" className='w-4 h-4' alt="" />
              </span>
            </div>
          </div>
          {DropDown &&
            <div className="text-left flex flex-col text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
              <Link to={"/dashboard/products"} className="cursor-pointer p-2 hover:bg-pink-500 rounded-md mt-1">
                All Products
              </Link>
              <Link to={"/dashboard/products/add"} className="cursor-pointer p-2 hover:bg-pink-500 rounded-md mt-1">
                Add Products
              </Link>
              <Link to={"/dashboard/orders"} className="cursor-pointer p-2 hover:bg-pink-500 rounded-md mt-1">
                Orders
              </Link>

            </div>}
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-pink-500 text-white"
          >
            <img src="/Images/logout.png" className='w-6 h-6' alt="" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
          </div>
        </div>}

    </section>)
}

export default SideBar