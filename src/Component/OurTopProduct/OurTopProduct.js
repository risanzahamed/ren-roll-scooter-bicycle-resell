import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CarBookingModal from '../CarBookingModal/CarBookingModal';
import NewProduct from '../Home/NewProduct';

const OurTopProduct = () => {

   const [product, setProduct] = useState([])
   const [productModel, setProductModel] = useState({})
    const [flag, setFlag] = useState(false)

   useEffect(()=>{
    fetch('https://ren-roll-scooter-bicycle-resell-server.vercel.app/best-selling')
    .then(res => res.json())
    .then(data => {
        setProduct(data)
    })
   }, [])
 
    return (
        <div className='mx-auto mb-10 lg:mb-0 lg:p-14'>
            <h2 className='lg:text-7xl text-4xl text-center font-bold ' data-aos="zoom-in" data-aos-duration="400">Discover Our Top Product</h2>

            <div className='grid lg:grid-cols-3 gap-5 lg:w-[1400px] mx-auto mt-10'>
                {
                    product.map(newProduct =>
                        <NewProduct
                            newProduct={newProduct}
                            setProductModel={setProductModel}
                            setFlag={setFlag}
                        ></NewProduct>)
                }
            </div>

            {/* <ProModal
            productModel={productModel}
            setProductModel={setProductModel}
            ></ProModal> */}
        </div>
    );
};

export default OurTopProduct;