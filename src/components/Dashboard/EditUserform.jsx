import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { isOpenEditUser } from '../../context/slices/editUserSlice';
import _ from 'lodash';

const EditUserform = () => {
    const dispatch = useDispatch()

    const [formData, updateFormData] = useState({}),
        [formErrors, updateFormErrors] = useState({});

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    }
    const handleEditColumn = (e) => {
        e.preventDefault()

    }

    const displayError = (key) => {
        if (!_.isEmpty(formErrors[key])) return <div className="pt-3 text-red-700">{formErrors[key]}</div>
    }
    return (
        <div className="fixed top-0 w-screen h-screen bg-black/80 flex items-center justify-center z-50">
            <div className="bg-gray-300 drop-shadow-xl rounded-xl sm:w-1/2 w-full mx-2" style={{ maxWidth: '500px' }}>
                <div className="w-full borderCardChrono relative px-8 py-4 flex items-center">
                    <span className="text-gray-900 font-bold text-lg">Edit User</span>
                    <button onClick={() => dispatch(isOpenEditUser())} className="absolute right-0 mr-5 cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8672 0.194897C14.625 0.200615 14.3949 0.301995 14.2271 0.47688L8.00026 6.70377L1.77337 0.47688C1.68784 0.38896 1.58554 0.319098 1.47252 0.271431C1.35951 0.223764 1.23807 0.199261 1.11541 0.199373C0.933136 0.199599 0.755062 0.254158 0.60394 0.35608C0.452819 0.458003 0.335512 0.602661 0.267004 0.771577C0.198497 0.940492 0.181898 1.126 0.21933 1.30439C0.256762 1.48278 0.346524 1.64597 0.47715 1.7731L6.70404 7.99999L0.47715 14.2269C0.389174 14.3113 0.318936 14.4125 0.27055 14.5245C0.222163 14.6364 0.196601 14.7569 0.19536 14.8789C0.194119 15.0008 0.217224 15.1218 0.263323 15.2347C0.309421 15.3476 0.377586 15.4502 0.463825 15.5364C0.550064 15.6227 0.652643 15.6908 0.765556 15.7369C0.878469 15.783 0.999445 15.8061 1.1214 15.8049C1.24335 15.8037 1.36383 15.7781 1.47578 15.7297C1.58774 15.6813 1.68891 15.6111 1.77337 15.5231L8.00026 9.29622L14.2271 15.5231C14.3116 15.6111 14.4128 15.6813 14.5247 15.7297C14.6367 15.7781 14.7572 15.8037 14.8791 15.8049C15.0011 15.8061 15.1221 15.783 15.235 15.7369C15.3479 15.6908 15.4505 15.6227 15.5367 15.5364C15.6229 15.4502 15.6911 15.3476 15.7372 15.2347C15.7833 15.1218 15.8064 15.0008 15.8052 14.8789C15.8039 14.7569 15.7784 14.6364 15.73 14.5245C15.6816 14.4125 15.6113 14.3113 15.5234 14.2269L9.29648 7.99999L15.5234 1.7731C15.6568 1.6452 15.7484 1.47997 15.7862 1.29908C15.824 1.11819 15.8063 0.93009 15.7354 0.759448C15.6644 0.588807 15.5436 0.443591 15.3886 0.342846C15.2337 0.2421 15.052 0.19053 14.8672 0.194897Z" fill="white" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col h-full p-7">
                    <form onSubmit={handleEditColumn} className="flex flex-col w-full">
                        
                    <div className="flex flex-col relative my-2">
                            <label htmlFor="name" className="mb-2 text-base bg-transparent font-semibold">Name</label>
                            <div className="outlin relative w-full">
                                <input id="name" type="text" name="name" placeholder="Name" className="block p-4 w-full inputLogin appearance-none outline-none text-sm font-medium" />
                            </div>
                            {displayError('name')}

                        </div>
                        
                        <div className="flex flex-col relative my-2">
                            <label htmlFor="phone" className="mb-2 text-base bg-transparent font-semibold">Phone</label>
                            <div className="outlin relative w-full">
                                <input id="phone" type="text" name="phone" placeholder="Phone" className="block p-4 w-full inputLogin appearance-none outline-none text-sm font-medium" />
                            </div>
                            {displayError('phone')}

                        </div>
                      
                        <div className="flex flex-col relative my-2">
                            <label htmlFor="email" className="mb-2 text-base bg-transparent font-semibold">Email</label>
                            <div className="outlin relative w-full">
                                <input id="email" type="email" name="email" placeholder="Email" className="block p-4 w-full inputLogin appearance-none outline-none text-sm font-medium" />
                            </div>
                            {displayError('email')}

                        </div>
                 
                        <div className="flex flex-row w-full place-content-end mt-4">
                            <button onClick={() => dispatch(isOpenEditUser())} className="py-3 px-4 mt-2 mr-6 rounded font-medium text-sm cursor-pointer border bg-white hover:bg-pink-500 hover:text-white">Cancel</button>
                            <button type="submit" className="py-3 px-4 mt-2 rounded font-medium text-sm  bg-gray-900 hover:bg-pink-500 text-white py-3 tracking-wide cursor-pointer  hover:-translate-y-1 transition-all duration-500">Save</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default EditUserform