import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CarBookingModal from '../CarBookingModal/CarBookingModal';

const Product = () => {
    const [productModel, setProductModel] = useState({})
    const [flag, setFlag] = useState(false)
    const [product, setProduct] = useState([])
    const { isLoading, user: { role } } = useSelector(state => state.auth)

    useEffect(() => {
        fetch('https://ren-roll-scooter-bicycle-resell-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    console.log(product);

    return (
        <div className='mx-auto lg:mb-0 lg:mt-0 mt-10 mb-10 lg:p-14'>
            <h2 data-aos="zoom-in" data-aos-duration="400" className='lg:text-7xl text-4xl mb-10 text-center font-bold '>Our All Products</h2>

            <div className='grid lg:grid-cols-3 gap-5 lg:w-[1400px] mx-auto mt-10'>
                {
                    product.map(product =>
                        <div data-aos="zoom-in" data-aos-duration="400" className='bg-white'>

                            <a href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                                <img
                                    alt="Home"
                                    src={product.image}
                                    class="h-80 w-full rounded-md object-cover"
                                />

                                <div class="mt-2">
                                    <dl>
                                        <div className='flex justify-between pb-5 pt-5'>
                                            <div>
                                                <dt class="sr-only"></dt>
                                                <dd class="text-sm text-gray-500"> Original Price {product.originalPrice}</dd>
                                            </div>

                                            <div>
                                                <dt class="sr-only">Resale Price</dt>
                                                <dd class="text-sm text-gray-500"> Resale Price {product.resalePrice}</dd>
                                            </div>
                                        </div>

                                        <div class=" flex justify-between ">

                                            <div class=" sm:mt-0">
                                                <p class="text-gray-500 text-sm">Category : <span className='font-medium'>{product.categoryName}</span> </p>
                                            </div>
                                            <div class=" sm:mt-0">
                                                <p class="text-gray-500 text-sm">Location : <span className='font-medium'>{product.location}</span> </p>
                                            </div>
                                        </div>

                                        <div className='mt-6'>
                                            <div>
                                                <dt class="sr-only">Name</dt>

                                                <dd class="font-medium text-xl">{product.model}</dd>
                                            </div>
                                        </div>


                                        <div class="mt-6">
                                            <div class=" sm:mt-0">
                                                <p class="text-gray-500 text-sm">Description : <span className='font-medium'>{product.description.slice(0, 150)}...</span> </p>
                                            </div>
                                        </div>
                                    </dl>
                                </div>
                                <label
                                    onClick={() => setProductModel(product)}
                                    htmlFor="product-modal"
                                    className="btn btn-primary mt-5"
                                >Buy Now</label>

                                {/* {
                                    role === "customer" && <button
                                        className='btn btn-secondary ml-5'
                                        onClick={() => setFlag([product])}
                                    >Report To Admin</button>
                                } */}

                            </a>


                        </div>)
                }
            </div>

            <CarBookingModal
                productModel={productModel}
                setProductModel={setProductModel}
            ></CarBookingModal>
        </div>
    );
};

export default Product;