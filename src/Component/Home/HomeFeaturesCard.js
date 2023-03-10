import React from 'react';

const HomeFeaturesCard = () => {
    return (
        <div>
            <section class="py-10 lg:max-w-[1500px]  mx-auto  sm:py-16 lg:py-24">
                <div>
                    <div class="grid grid-cols-1 lg:gap-12 text-center sm:grid-cols-2 md:grid-cols-3 ">
                        <div data-aos="zoom-in" data-aos-duration="100" >

                            <div className='border bg-white lg:pt-20 lg:pb-20 rounded-md p-8 m-4 lg:m-0 lg:p-14 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white transition ease-in-out delay-150'>
                                <h3 class="mt-8 text-2xl font-semibold  text-left">Saddle Personal Fitting</h3>
                                <p class="mt-4 text-base text-left ">Individual saddle fitting according to your height and weight.</p>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="200" >

                            <div className='border bg-white hover:text-white rounded-md p-8 m-4 lg:m-0 lg:pt-20 lg:pb-20  lg:p-14 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 transition ease-in-out delay-150'>
                                <h3 class="mt-8 text-2xl font-semibold  text-left">Spare Parts Exchange</h3>
                                <p class="mt-4 text-base text-left ">Have spare parts and want to sell or exchange them? Come and see!</p>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="300" className=''>
                            <div class="relative text-left border bg-white rounded-md lg:w-[550px] p-4 m-4  lg:m-0 lg:p-8 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white transition ease-in-out delay-150">
                                <h3 class="mt-8 text-3xl font-bold k">Subscribe to our newsletter about new products</h3>
                                <p class="mt-4 text-base ">Have spare parts and want to sell or exchange them? Come and see!</p>
                                <div class=" rounded-lg  dark:bg-gray-800">
                                    <form className='lg:flex lg:justify-between'>

                                        <div class="">
                                            <label class="block  text-sm  dark:text-gray-200">Email address</label>
                                            <input type="email" placeholder="johndoe@example.com" class="block mt-4 w-[300px] px-5 py-2.5  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>

                                        <button class=" btn btn-primary mt-8">
                                            Send message
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default HomeFeaturesCard;