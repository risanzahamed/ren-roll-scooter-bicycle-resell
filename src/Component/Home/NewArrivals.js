import React, { useEffect, useState } from 'react';
import CarBookingModal from '../CarBookingModal/CarBookingModal';
import NewProduct from './NewProduct';

const NewArrivals = () => {

    const [newArivales, setNewArivales] = useState([])
    const [productModel, setProductModel] = useState({})
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        fetch('https://ren-roll-scooter-bicycle-resell-server.vercel.app/new-arivales')
            .then(res => res.json())
            .then(data => {
                setNewArivales(data)
            })
    }, [])

    console.log(newArivales);

    return (
        <div className='mx-auto mb-10 lg:mb-0 lg:p-14'>
            <h2 className='lg:text-7xl text-4xl text-center font-bold '>Discover our new arrivals</h2>

            <div className='grid lg:grid-cols-3 gap-5 lg:w-[1400px] mx-auto mt-10'>
                {
                    newArivales.map(newProduct =>
                        <NewProduct
                            newProduct={newProduct}
                            setProductModel={setProductModel}
                            setFlag={setFlag}
                        ></NewProduct>)
                }
            </div>

            <CarBookingModal
            productModel={productModel}
            setProductModel={setProductModel}
            ></CarBookingModal>
        </div>
    );
};

export default NewArrivals;