import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div className="container  mx-auto">
                <div className='grid items-center lg:grid-cols-2 gap-16'>

                    <div className='block p-4 lg:hidden'>
                        <div>
                            <div>
                                <h1 class=" text-4xl font-semibold text-black  lg:mt-8 sm:text-6xl xl:text-5xl">Top Quality Bicycles for resell </h1>
                                <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">When looking for top-quality bicycles, consider reputable brands like Trek, Giant, Specialized, Cannondale, and Scott. These companies are known for their innovative designs, durable materials, and exceptional performance.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center lg:w-[800px]   sm:py-8 lg:px-4">
                        {/* Carousel for desktop and large size devices */}
                        <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={2} step={1} infinite={true}>
                            <div className="w-full relative flex items-center justify-center">
                                <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8  cursor-pointer" id="prev">
                                    <svg width={58} height={40} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </ButtonBack>
                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                    <Slider data-aos="flip-up">
                                        <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                            <Slide index={0}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                    <img src="https://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/product-6-5.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                        <div className="flex h-full items-end pb-6">

                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                            <Slide index={1}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                    <img src="https://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/product-6-4.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                        <div className="flex h-full items-end pb-6">

                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                            <Slide index={2}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                    <img src="https://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/product-6-3.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                        <div className="flex h-full items-end pb-6">

                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                        </div>
                                    </Slider>
                                </div>
                                <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 " id="next">
                                    <svg width={58} height={40} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </ButtonNext>
                            </div>
                        </CarouselProvider>

                        {/* Carousel for tablet and medium size devices */}
                        <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={2} step={1} infinite={true}>
                            <div className="w-full relative flex items-center justify-center">
                                <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400  focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                    <svg width={58} height={40} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </ButtonBack>
                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                    <Slider data-aos="flip-up">
                                        <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                            <Slide index={0}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                    <img src="https://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/product-6-5.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                        <div className="flex h-full items-end pb-6">

                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                            <Slide index={1}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                    <img src="https://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/product-6-4.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                        <div className="flex h-full items-end pb-6">

                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                            <Slide index={2}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                    <img src="https://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/product-6-3.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                        <div className="flex h-full items-end pb-6">

                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                        </div>
                                    </Slider>
                                </div>
                                <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                    <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </ButtonNext>
                            </div>
                        </CarouselProvider>

                        {/* Carousel for mobile and Small size Devices */}
                        <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true}>
                            <div className="w-full relative flex items-center justify-center">
                                <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 " id="prev">
                                    <svg width={58} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </ButtonBack>
                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                    <Slider data-aos="flip-up">
                                        <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                            <Slide index={0}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                    <img src="https://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/product-6-5.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                        <div className="flex h-full items-end pb-6">

                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                            <Slide index={1}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                    <img src="https://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/product-6-4.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                        <div className="flex h-full items-end pb-6">

                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                            <Slide index={2}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                    <img src="https://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/product-6-3.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                        <div className="flex h-full items-end pb-6">

                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                        </div>
                                    </Slider>
                                </div>
                                <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 " id="next">
                                    <svg width={58} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </ButtonNext>
                            </div>
                        </CarouselProvider>
                    </div>

                    <div className='lg:block hidden'>
                        <div>
                            <h1 class="mt-4 text-4xl font-semibold text-black  lg:mt-8 sm:text-6xl xl:text-5xl">Top Quality Bicycles for resell </h1>
                            <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">When looking for top-quality bicycles, consider reputable brands like Trek, Giant, Specialized, Cannondale, and Scott. These companies are known for their innovative designs, durable materials, and exceptional performance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;