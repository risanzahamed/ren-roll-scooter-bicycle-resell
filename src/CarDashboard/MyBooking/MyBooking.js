import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSelector } from 'react-redux';
import MyBookingCard from './MyBookingCard';

const MyBooking = () => {
    const { isLoading, user } = useSelector(state => state.auth)
    
    const url = `https://ren-roll-scooter-bicycle-resell-server.vercel.app/book-product?email=${user?.email}`

    const { data: car = [] } = useQuery({
        queryKey: ['book-product', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    console.log(car);

    return (
        <div>
            <h2 className='text-4xl'>My orders </h2>

            <div className='grid lg:grid-cols-2 gap-5 mt-5 grid-cols-1'>
            {
                car && car.map(carbooked => <MyBookingCard
                    key={carbooked._id}
                    carbooked={carbooked}
                    ></MyBookingCard>
                        
                   )
            }
            </div>

        </div>
    );
};

export default MyBooking;