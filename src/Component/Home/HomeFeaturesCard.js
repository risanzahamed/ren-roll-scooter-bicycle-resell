import React from 'react';

const HomeFeaturesCard = () => {
    return (
        <div>
            <section class="py-10 lg:max-w-[1500px]  mx-auto  sm:py-16 lg:py-24">
                <div>
                    <div class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 ">
                        <div className='border bg-white  rounded-md p-8 m-4 lg:m-0 lg:p-14 '>
                            
                            <h3 class="mt-8 text-2xl font-semibold text-black text-left">Saddle Personal Fitting</h3>
                            <p class="mt-4 text-base text-left text-gray-600">Individual saddle fitting according to your height and weight.</p>
                        </div>

                        <div className='border bg-white  rounded-md p-8 m-4 lg:m-0 lg:p-14'>
                            
                            <h3 class="mt-8 text-2xl font-semibold text-black text-left">Spare Parts Exchange</h3>
                            <p class="mt-4 text-base text-left text-gray-600">Have spare parts and want to sell or exchange them? Come and see!</p>
                        </div>

                        <div className='border bg-white rounded-md lg:w-[550px] p-4 m-4  lg:m-0 lg:p-8'>
                            <div class="relative text-left">
                                <h3 class="mt-8 text-3xl font-bold text-black">Subscribe to our newsletter about new products</h3>
                                <p class="mt-4 text-base text-gray-600">Have spare parts and want to sell or exchange them? Come and see!</p>
                                <div class=" rounded-lg  dark:bg-gray-800">
                                    <form className='lg:flex lg:justify-between'>

                                        <div class="">
                                            <label class="block  text-sm text-gray-600 dark:text-gray-200">Email address</label>
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