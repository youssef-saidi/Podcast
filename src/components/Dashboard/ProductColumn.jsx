import React from 'react'
import { useDispatch } from 'react-redux'
import { isOpenEditProduct } from '../../context/slices/editProductSlice'

const ProductColumn = () => {
    const dispatch=useDispatch()
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100 bg-white cursor-pointer">
            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <div className="mr-2">
                        <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt='' />
                    </div>
                    <span>Shoes</span>
                </div>
            </td>
            <td className="py-3 px-6 text-center whitespace-nowrap">

                <span className="font-medium">255 $</span>
            </td>

            <td className="py-3 px-6 text-center">
                <span className="font-medium">#1589-512</span>

            </td>
            <td className="py-3 px-6 text-center">
                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Yes</span>
            </td>
            <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                    <button onClick={()=>dispatch(isOpenEditProduct())} className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default ProductColumn