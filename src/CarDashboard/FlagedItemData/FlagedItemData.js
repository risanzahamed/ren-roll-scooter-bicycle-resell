import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FlagedCard from './FlagedCard';

const FlagedItemData = () => {
    const [flaged , setFlaged] = useState([])

    useEffect(()=>{
        fetch('https://ren-roll-scooter-bicycle-resell-server.vercel.app/flag-items')
        .then(res => res.json())
        .then(data =>{
            setFlaged(data)
        })
    },[])

    console.log(flaged);
    return (
        <div>
            <h1 className='text-4xl'>Flaged Items</h1>

            <div className="grid mb-14 p-10 gap-8 row-gap-12 lg:grid-cols-2">
                {
                    flaged.map(flag => <FlagedCard
                        key={flag._id}
                        flag={flag}
                    ></FlagedCard>)
                }
            </div>
        </div>
    );
};

export default FlagedItemData;