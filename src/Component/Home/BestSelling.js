import React, { useEffect, useState } from 'react';
import CarBookingModal from '../CarBookingModal/CarBookingModal';
import ProModal from '../Modal/ProModal';
import BestSellingCard from './BestSellingCard';

const BestSelling = () => {
    const [bestSelling, setBestSelling] = useState([])

    const [productModel, setProductModel] = useState({})
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        fetch('https://ren-roll-scooter-bicycle-resell-server.vercel.app/best-selling')
            .then(res => res.json())
            .then(data => {
                setBestSelling(data)
            })
    }, [])


    return (
        <div className='mx-auto lg:p-14'>
            <h2 className='lg:text-7xl text-4xl text-center font-bold '>Most Viewed Product</h2>

            <div className='grid lg:grid-cols-3 gap-5 lg:w-[1400px] mx-auto mt-10'>
                {
                    bestSelling.map(productBest =>
                        <BestSellingCard
                        key={productBest._id}
                            productBest = {productBest}
                            setProductModel={setProductModel}
                            setFlag={setFlag}
                        ></BestSellingCard>)
                }
            </div>

            <ProModal
            productModel={productModel}
            setProductModel={setProductModel}
            ></ProModal>


        </div>
    );
};

export default BestSelling;