import React from 'react';
import BsFillCheckCircleFill from 'react-icons/bs'

const WebsiteFeature = () => {
    return (
        <div>
            <section class="py-10 lg:w-[1450px] mx-auto bg-purple-800 sm:py-16 lg:py-14">
                <div class="px-4 mx-auto  sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-4 lg:gap-y-16">
                        <div data-aos="flip-right">
                            
                            <h3 class="mt-8 text-2xl font-semibold text-white text-left">Fast Delivery</h3>
                            <p class="mt-4 text-base text-white text-left">We understand that waiting for your purchases to arrive can be frustrating. That's why we offer fast delivery services to ensure that you receive.</p>
                        </div>

                        <div data-aos="flip-right">
                            
                            <h3 class="mt-8 text-2xl font-semibold text-white text-left">
                                Order Tracking</h3>
                            <p class="mt-4 text-base text-white text-left">Keep track of your purchases from start to finish with our order tracking system. Once your order is placed.</p>
                        </div>

                        <div data-aos="flip-right">
                            
                            <h3 class="mt-8 text-2xl font-semibold text-white text-left">
                                Secure Payment</h3>
                            <p class="mt-4 text-base text-white text-left">At our online store, we take your security seriously. That's why we use secure payment systems to ensure that your personal information is protected.</p>
                        </div>

                        <div data-aos="flip-right">
                           
                            <h3 class="mt-8 text-left text-2xl font-semibold text-white">
                                Pick Up Today</h3>
                            <p class="mt-4 text-base text-left text-white">Need your purchases urgently? We offer a convenient pick-up option, so you can get your items today. </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default WebsiteFeature;