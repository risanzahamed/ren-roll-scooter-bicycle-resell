import React from 'react';

const OurGallary = () => {
    return (
        <div className='p-12'>
            <h2 className='lg:text-7xl text-4xl text-center font-bold mx-auto mb-10 lg:mb-0 lg:p-14' data-aos="zoom-in" data-aos-duration="400">See Our Gallery</h2>

            <div className='grid lg:grid-cols-3 gap-5 lg:w-[1400px] mx-auto mt-10'>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://hugge.qodeinteractive.com/wp-content/uploads/2021/02/h12-gallery-img1.jpg"
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-1 text-lg font-bold text-gray-100">
                            Online
                        </p>
                       
                    </div>
                </div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://hugge.qodeinteractive.com/wp-content/uploads/2021/02/h12-gallery-img2.jpg"
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-1 text-lg font-bold text-gray-100">
                            Urben
                        </p>
                      
                    </div>
                </div>
                
                
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://hugge.qodeinteractive.com/wp-content/uploads/2021/02/h12-gallery-img3.jpg"
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-1 text-lg font-bold text-gray-100">
                           Scooter
                        </p>
                       
                    </div>
                </div>



                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://hugge.qodeinteractive.com/wp-content/uploads/2021/02/h12-gallery-img4.jpg"
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-1 text-lg font-bold text-gray-100">
                            Support
                        </p>
                        
                    </div>
                </div>




                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://hugge.qodeinteractive.com/wp-content/uploads/2021/02/h12-gallery-img5.jpg"
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-1 text-lg font-bold text-gray-100">
                           Electric
                        </p>
                    
                    </div>
                </div>


                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://hugge.qodeinteractive.com/wp-content/uploads/2021/02/h12-gallery-img6.jpg"
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-1 text-lg font-bold text-gray-100">
                            Friendly
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>


    );
};

export default OurGallary;