import React from 'react';
import { useSelector } from 'react-redux';

const BestSellingCard = ({ productBest, setProductModel, setFlag }) => {


    const { isLoading, user: { role } } = useSelector(state => state.auth)
    return (
        <div className=''>
            <a href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt="Home"
                    src={productBest.image}
                    class="h-80 w-full rounded-md object-cover"
                />

                <div class="mt-2">
                    <dl>
                        <div className='flex justify-between pb-5 pt-5'>
                            <div>
                                <dt class="sr-only"></dt>
                                <dd class="text-sm text-gray-500"> Original Price {productBest.originalPrice}</dd>
                            </div>

                            <div>
                                <dt class="sr-only">Resale Price</dt>
                                <dd class="text-sm text-gray-500"> Resale Price {productBest.resalePrice}</dd>
                            </div>
                        </div>

                        <div>
                            <div>
                                <dt class="sr-only">Name</dt>

                                <dd class="font-medium text-xl">{productBest.model}</dd>
                            </div>
                        </div>

                        <div class="mt-6">

                            <div class=" sm:mt-0">
                                <p class="text-gray-500 text-sm">Category : <span className='font-medium'>{productBest.categoryName}</span> </p>
                            </div>
                        </div>
                    </dl>
                </div>
                <label
                    onClick={() => setProductModel(productBest)}
                    htmlFor="product-modal"
                    className="btn btn-primary mt-5"
                >Buy Now</label>

                {
                    role === "customer" && <button
                        className='btn btn-secondary ml-5'
                        onClick={() => setFlag(productBest)}
                    >Report To Admin</button>
                }
            </a>


        </div>
    );
};

export default BestSellingCard;