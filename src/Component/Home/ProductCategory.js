import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const ProductCategory = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product-category')
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })

    }, [])
    console.log(category);
    return (
        <div className='mx-auto lg:mb-0 mb-10 lg:p-14'>
            <h2 className='lg:text-7xl text-4xl mb-8 text-center font-bold '>Discover our Product Category</h2>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mx-auto lg:max-w-[1500px]'>
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