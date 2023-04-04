import { useState } from 'react'
// import { useNavigate } from 'react-router';
import _ from 'lodash';


const AddProduct = () => {
    const [formData, updateFormData] = useState({}),
        [formErrors, updateFormErrors] = useState({});
        // navigate = useNavigate();

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    }

    const handleSubmit = (_event) => {
        _event.preventDefault();

        let errors = {};



        updateFormErrors(errors);

        if (!_.isEmpty(errors)) return;




    }

    const displayError = (key) => {
        if (!_.isEmpty(formErrors[key])) return <div className="pt-3 text-red-700">{formErrors[key]}</div>
    }





    return (
        <div className="flex md:flex-row flex-col-reverse w-full h-full">

            <div className="w-full flex flex-col items-center justify-center h-full bg-transparent md:pb-10 pb-16 md:pt-16 pt-10">
                <form className="flex flex-col md:mt-10 mt-5 relative" onSubmit={handleSubmit}>
                    <div>
                        <div className="flex flex-col font-bold items-center md:items-start text-xl md:w-full w-80" >
                            <h1 className='text-2xl'>Add Product</h1>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex lg:flex-row flex-col">
                            <div className="flex flex-col relative lg:mr-2">
                                <label htmlFor="name" className="text-base bg-transparent font-semibold py-2">Name*</label>
                                <input type="name" name="name" placeholder="Name" className="shadow-sm block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-white text-black text-sm pt-5 font-medium" onChange={handleChange} />

                                {displayError('name')}
                            </div>

                            <div className="flex flex-col relative lg:mr-2">
                                <label htmlFor="price" className="text-base bg-transparent font-semibold py-2">Price*</label>
                                <input type="price" name="price" placeholder="Price" className="shadow-sm block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-white text-black text-sm pt-5 font-medium" onChange={handleChange} />

                                {displayError('price')}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex lg:flex-row flex-col">
                            <div className="flex flex-col relative lg:mr-2">
                                <label htmlFor="referance" className="text-base bg-transparent font-semibold py-2">Referance*</label>
                                <input type="referance" name="referance" placeholder="Referance" className="shadow-sm block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-white text-black text-sm pt-5 font-medium" onChange={handleChange} />

                                {displayError('referance')}
                            </div>

                            <div className="flex flex-col relative lg:mr-2">
                                <label htmlFor="quantity" className="text-base bg-transparent font-semibold py-2">Quantity*</label>
                                <input type="quantity" name="quantity" placeholder="Quantity" className="shadow-sm block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-white text-black text-sm pt-5 font-medium" onChange={handleChange} />

                                {displayError('quantity')}
                            </div>
                        </div>
                    </div>
                    <div className="text-center">{displayError('error')}</div>
                    <div className="w-full flex justify-end items-end">
                        <button className="w-32 font-semibold rounded-2xl bg-gray-900 hover:bg-pink-500 text-white py-3 tracking-wide mt-10 cursor-pointer  hover:-translate-y-1 transition-all duration-500" type="submit">Add Product</button>
                    </div>


                </form>


            </div>


        </div>
    )
}

export default AddProduct