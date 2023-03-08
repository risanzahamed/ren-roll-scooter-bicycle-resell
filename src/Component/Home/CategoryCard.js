import React from 'react';
import { BsScooter } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const CategoryCard = ({ productCategory }) => {
    const { image, categoryName } = productCategory
    return (
        <div>
            <section data-aos="zoom-in"  class="mt-8 lg:m-3 mx-auto ">
                <Link to={`/category/${productCategory.categoryName}`}>
                    <div>
                        <div class=" text-center hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white hover:rounded-md hover:border-blue-800 hover:border-2 transition ease-in-out delay-150 ">
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