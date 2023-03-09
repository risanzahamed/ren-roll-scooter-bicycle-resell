import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const CarBookingModal = ({ productModel, setProductModel }) => {
    const { model, categoryName,category, resalePrice, image, location, description } = productModel

    const { isLoading, user  } = useSelector(state => state.auth)

    const handleCarBooking = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const location = form.location.value;
        const category = form.category.value;
        const model = form.model.value;

        const bookProduct = {
            email,
            phone,
            price,
            image,
            category,
            model,
            location
        }



        fetch('https://ren-roll-scooter-bicycle-resell-server.vercel.app/book-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookProduct)


        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Selected Product is booking success')
                }
                else {
                    toast.success(data.message)
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative">
                    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleCarBooking} className="flex flex-col w-96 mx-auto mt-4 mb-4 rounded  dark:text-gray-100 ng-untouched ng-pristine ng-valid">

                        <img className='h-80 w-full rounded-md object-cover' src={image} alt="" srcSet="" />


                        <h1 className='readOnly mt-5 mb-5'>Description : {description}</h1>

                       

                        <input name='category' id="category" type="text" defaultValue={categoryName || category} readOnly placeholder='Full Name' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />

                        <input name='model' id="model" type="text" defaultValue={model} readOnly placeholder='Full Name' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />


                        <input name='location' id="location" type="text" defaultValue={location} readOnly placeholder='Full Name' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />

                        <input name='price' id="price" type="text" defaultValue={resalePrice} readOnly className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />

                        <input id="name" type="name" name='name' defaultValue={user?.name} readOnly placeholder='Email Address' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />


                        <input id="email" type="email" name='email' defaultValue={user?.email} readOnly placeholder='Email Address' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />


                        <input id="phone" name='phone' type="tel" placeholder='Phone Numbers' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />

                        {
                            user?.email && user?.role ? <input  htmlFor="product-modal"  className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 btn bg-orange-700 text-white dark:text-gray-900" type="submit" value="Submit" /> :  <Link to='/choose-profile'>
                            <button className='btn btn-primary text-xs align-middle text-center mt-5'>
                                Please Login or create your seller account to buy a product</button>
                            </Link>
                        }


                        

                    </form>

                </div>

            </div>
        </div>
    );
};

export default CarBookingModal;