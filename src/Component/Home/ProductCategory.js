import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const ProductCategory = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('https://ren-roll-scooter-bicycle-resell-server.vercel.app/product-category')
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })

    }, [])

    return (
        <div className='mx-auto lg:mb-0 mb-10 p-5 lg:p-14 '>
            <h2 className='lg:text-7xl text-4xl mb-8 text-center font-bold ' data-aos="zoom-in" data-aos-duration="400">Discover our Product Category</h2>

            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-5 mx-auto lg:max-w-[1550px] '>
                {
                    category.map(productCategory => <CategoryCard
                        key={productCategory._id}
                        productCategory={productCategory}
                    >

                    </CategoryCard>)
                }
            </div>
        </div>
    );
};

export default ProductCategory;