import React from 'react';
import { useSelector } from 'react-redux';

const MyProductCate = ({ newProduct, setProductModel, setFlag }) => {

    const { isLoading, user: { role } } = useSelector(state => state.auth)
    return (
        <div className=''>

            <a class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt="Home"
                    src={newProduct.image}
                    class="h-80 w-full rounded-md object-cover"
                />

                <div class="mt-2">
                    <dl>
                        <div className='flex justify-between pb-5 pt-5'>
                            <div>
                                <dt class="sr-only"></dt>
                                <dd class="text-sm text-gray-500"> Original Price {newProduct.originalPrice}</dd>
                            </div>

                            <div>
                                <dt class="sr-only">Resale Price</dt>
                                <dd class="text-sm text-gray-500"> Resale Price {newProduct.resalePrice}</dd>
                            </div>
                        </div>

                        <div class=" flex justify-between ">

                            <div class=" sm:mt-0">
                                <p class="text-gray-500 text-sm">Category : <span className='font-medium'>{newProduct.categoryName}</span> </p>
                            </div>
                            <div class=" sm:mt-0">
                                <p class="text-gray-500 text-sm">Location : <span className='font-medium'>{newProduct.location}</span> </p>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <div>
                                <dt class="sr-only">Name</dt>

                                <dd class="font-medium text-xl">{newProduct.model}</dd>
                            </div>
                        </div>


                        <div class="mt-6">

                            <div class=" sm:mt-0">
                                <p class="text-gray-500 text-sm">Description : <span className='font-medium'>{newProduct.description.slice(0, 150)}...</span> </p>
                            </div>
                        </div>
                    </dl>
                </div>
                <label
                    onClick={() => setProductModel(newProduct)}
                    htmlFor="product-modal"
                    className="btn btn-primary mt-5"
                >Buy Now</label>
            </a>


        </div>
    );
};

export default MyProductCate;