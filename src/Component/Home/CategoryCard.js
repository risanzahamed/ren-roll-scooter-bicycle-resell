import React from 'react';
import { BsScooter } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const CategoryCard = ({ productCategory }) => {
    const { image, categoryName } = productCategory
    return (
        <div>
            <section class="mt-8  mx-auto ">
                <Link to={`/category/${productCategory.categoryName}`}>
                    <div>
                        <div class=" text-center ">
                            <div className='border p-10 bg-white rounded-md  m-0 lg:m-0 '>
                                <div class="relative flex align-middle items-center justify-center mx-auto">
                                    <img className='lg:w-[150px] lg:h-[150px] w-[100px] ' src={image} alt="" srcset="" />
                                </div>
                                <h3 class="mt-8 text-3xl font-bold text-black">{categoryName}</h3>
                            </div>
                        </div>
                    </div>
                </Link>
            </section >


        </div >
    );
};

export default CategoryCard;