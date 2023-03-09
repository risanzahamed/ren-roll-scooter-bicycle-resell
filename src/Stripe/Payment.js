import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe("pk_test_51MjjX9BnHYhj3RHAe4uLZZ6BUJq6TivrwfiCNxePnIN2Hcn6DixzqfFC2CJeby7Pt8mawYWSE7nW0xcQH0puCIUZ00aCg7hm9t");

const Payment = () => {

    const data = useLoaderData()
    console.log(data);

    const navigation = useNavigation()

    if(navigation.status === "loading"){
        return <Loading/>
    }

    return (
        <div>
            <h2 className='text-4xl'>Payment</h2>
            <div className='mt-12'>
                <h2 className='text-2xl '>Product Name : {data.category}</h2>
                <h2 className='text-2xl '>Product Model : {data.model}</h2>
                <h2 className='text-2xl '>Product Price: {data.price}</h2>
                <h2 className='text-2xl '>Your Phone: {data.phone}</h2>
                <h2 className='text-2xl'>Your Email : {data.email}</h2>
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                        productDetails = {data}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;