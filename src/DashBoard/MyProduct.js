import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSelector } from 'react-redux';

const MyProduct = () => {
    const { isLoading, user } = useSelector(state => state.auth)
    
    const url = `http://localhost:5000/book-product?email=${user?.email}`

    const { data: car = [] } = useQuery({
        queryKey: ['book-product', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers:{
                    authorization :`bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default MyProduct;