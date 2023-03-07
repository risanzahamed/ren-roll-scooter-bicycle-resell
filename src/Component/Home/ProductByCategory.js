import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CarBookingModal from '../CarBookingModal/CarBookingModal';
import MyProductCate from './MyProductCate';

const ProductByCategory = () => {
    const probycate = useLoaderData()
    console.log(probycate);
    const [productModel, setProductModel] = useState({})
    const [flag, setFlag] = useState(false)
    return (
        <div className='bg-white'>
           
            <div className='grid lg:grid-cols-3 gap-5 lg:w-[1400px] mx-auto pt-10 pb-10'>
                {
                    probycate.map(newProduct => 
                   <MyProductCate
                   newProduct = {newProduct}
                   setProductModel={setProductModel}
                   setFlag={setFlag}
                   ></MyProductCate>)
                }
            </div>

            <CarBookingModal
            productModel={productModel}
            setProductModel={setProductModel}
            ></CarBookingModal>

           
            
        </div>
    );
};

export default ProductByCategory;