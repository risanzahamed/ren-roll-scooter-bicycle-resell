import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Advertise from '../Advertise/Advertise';
import MyProductCard from './MyProductCard';

const MyProduct = () => {

    const { isLoading, user } = useSelector(state => state.auth)

    const [advertise, setAdvertise] = useState(false)



    const url = `https://ren-roll-scooter-bicycle-resell-server.vercel.app/add-product?email=${user?.email}`

    const { data: products = [], refetch } = useQuery({
        queryKey: ['add-product', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    console.log(products);


    return (
        <div>
            <h2 className='text-4xl'>My Product</h2>

            <div className="grid mb-14 pt-10 gap-8 row-gap-12 lg:grid-cols-2">
                {
                    products.map(product => <MyProductCard
                        key={product._id}
                        product={product}
                        setAdvertise={setAdvertise}
                    ></MyProductCard>)
                }
            </div>

            {
                advertise &&
                <Advertise
                    advertise={advertise}
                />
            }


        </div>
    );
};

export default MyProduct;