import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Shared/Loading';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);


const Payment = () => {

    const data = useLoaderData()
    console.log(data);

    const navigation = useNavigation()

    if(navigation.status === "loading"){
        return <Loading/>
    }

    const { model, category } = data
    return (
        <div>
            <h2 className='text-4xl'>Payment</h2>
            <div className='mt-12'>
                <h2 className='text-2xl '>Car Name : {category}</h2>
                <h2 className='text-2xl mt-2'>Car Model : {model}</h2>

                <div>
                    < >
                       
                        carDetails = {data}
                     
                    </>
                </div>
            </div>
        </div>
    );
};

export default Payment;