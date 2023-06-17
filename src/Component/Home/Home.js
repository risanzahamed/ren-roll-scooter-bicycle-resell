import React from 'react';
import Carousel from './Carousel';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import HomeFeaturesCard from './HomeFeaturesCard';
import NewArrivals from './NewArrivals';
import ProductCategory from './ProductCategory';
import CoreScooterFeature from './CoreScooterFeature';
import WebsiteFeature from './WebsiteFeature';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurGallary from '../OurGallary/OurGallary';
import OurTeam from './OurTeam';
import NumberSec from './NumberSec';


const Home = () => {
    return (
        <div class="bg-white mx-auto">
            <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto lg:max-w-[1400px] sm:px-6 lg:px-8">
                    <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div data-aos="zoom-out-up">
                            <h1  class="mt-4 text-4xl font-semibold text-black lg:leading-loose lg:mt-8 sm:text-6xl xl:text-5xl">Ride Green with Ren Roll Kick Scooter and BiCycle </h1>
                            <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">Ren Roll offers sustainable transportation options with our kick scooters and bicycles for resell. Our products are high-quality and designed for riders of all levels. Join us in our mission to ride green and reduce carbon emissions.</p>

                            <a href="#" title="" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-8 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                                See Category
                                <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>

                        <div data-aos="fade-left">
                            <div className="flex items-center justify-center lg:w-[800px]  sm:py-8 ">
                                {/* Carousel for desktop and large size devices */}
                                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={2} step={1} infinite={true}>
                                    <div className="w-full relative flex items-center justify-center">
                                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8  cursor-pointer" id="prev">
                                            <svg width={58} height={40} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </ButtonBack>
                                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                            <Slider >
                                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                                    <Slide index={0}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                            <img src="https://cdn.shopify.com/s/files/1/0626/1407/7628/files/2_2a6e46fb-ef9a-40d9-a958-7e6ab97a06ef.png?v=1666269067&width=1500" alt="black chair and white table" className="object-cover object-center w-full" />
                                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                                <div className="flex h-full items-end pb-6">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slide>
                                                    <Slide index={1}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                            <img src="https://cdn.shopify.com/s/files/1/0626/1407/7628/files/3_35741ae6-bc40-45ca-8c0b-8af52fce5949.png?v=1666269090&width=1500" alt="sitting area" className="object-cover object-center w-full" />
                                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                                <div className="flex h-full items-end pb-6">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slide>
                                                    <Slide index={2}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                            <img src="https://cdn.shopify.com/s/files/1/0626/1407/7628/files/4_5d450262-363c-4805-9cdc-9a37fe3dc4df.png?v=1666269276&width=1500" alt="sitting area" className="object-cover object-center w-full" />
                                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                                <div className="flex h-full items-end pb-6">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slide>
                                                    <Slide index={3}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                            <img src="https://cdn.shopify.com/s/files/1/0626/1407/7628/files/1_e763eecd-1eeb-401f-81c2-7bdc16b8a28c.png?v=1666269037&width=1500" alt="sitting area" className="object-cover object-center w-full" />
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
                                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={2} step={1} infinite={true}>
                                    <div className="w-full relative flex items-center justify-center">
                                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400  focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                            <svg width={58} height={40} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </ButtonBack>
                                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                            <Slider >
                                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                                    <Slide index={0}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                            <img src="https://cdn.shopify.com/s/files/1/0626/1407/7628/files/2_2a6e46fb-ef9a-40d9-a958-7e6ab97a06ef.png?v=1666269067&width=1500" alt="black chair and white table" className="object-cover object-center w-full" />
                                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                                <div className="flex h-full items-end pb-6">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slide>
                                                    <Slide index={1}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                            <img src="https://cdn.shopify.com/s/files/1/0626/1407/7628/files/3_35741ae6-bc40-45ca-8c0b-8af52fce5949.png?v=1666269090&width=1500" alt="sitting area" className="object-cover object-center w-full" />
                                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                                <div className="flex h-full items-end pb-6">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slide>
                                                    <Slide index={2}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                            <img src="https://cdn.shopify.com/s/files/1/0626/1407/7628/files/4_5d450262-363c-4805-9cdc-9a37fe3dc4df.png?v=1666269276&width=1500" alt="sitting area" className="object-cover object-center w-full" />
                                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                                <div className="flex h-full items-end pb-6">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slide>
                                                    <Slide index={3}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                            <img src="https://cdn.shopify.com/s/files/1/0626/1407/7628/files/1_e763eecd-1eeb-401f-81c2-7bdc16b8a28c.png?v=1666269037&width=1500" alt="sitting area" className="object-cover object-center w-full" />
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
                                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                                    <div className="w-full relative flex items-center justify-center">
                                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 " id="prev">
                                            <svg width={58} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </ButtonBack>
                                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                            <Slider >
                                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                                    <Slide index={0}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                            <img src="https://cdn.shopify.com/s/files/1/0626/1407/7628/files/2_2a6e46fb-ef9a-40d9-a958-7e6ab97a06ef.png?v=1666269067&width=1500" alt="black chair and white table" className="object-cover object-center w-full" />
                                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                                <div className="flex h-full items-end pb-6">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slide>
                                                    <Slide index={1}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                            <img src="https://cdn.shopify.com/s/files/1/0626/1407/7628/files/3_35741ae6-bc40-45ca-8c0b-8af52fce5949.png?v=1666269090&width=1500" alt="sitting area" className="object-cover object-center w-full" />
                                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                                <div className="flex h-full items-end pb-6">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slide>
                                                    <Slide index={2}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                            <img src="https://cdn.shopify.com/s/files/1/0626/1407/7628/files/4_5d450262-363c-4805-9cdc-9a37fe3dc4df.png?v=1666269276&width=1500" alt="sitting area" className="object-cover object-center w-full" />
                                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                                                                <div className="flex h-full items-end pb-6">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slide>
                                                    <Slide index={3}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                            <img src="https://cdn.shopify.com/s/files/1/0626/1407/7628/files/1_e763eecd-1eeb-401f-81c2-7bdc16b8a28c.png?v=1666269037&width=1500" alt="sitting area" className="object-cover object-center w-full" />
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
                        </div>
                    </div>
                </div>
            </section>

            <Carousel />

            <HomeFeaturesCard />
            
            <ProductCategory/>

            <NewArrivals/>

            <CoreScooterFeature/>

            <WebsiteFeature/>

            <OurTeam/>

            <OurGallary/>

            <NumberSec/>


        </div>




    );
};

export default Home;