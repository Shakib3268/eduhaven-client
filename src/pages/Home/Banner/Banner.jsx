import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
           <div className='relative'>
           <img src='https://rn53themes.net/themes/demo/education-master/images/slider/1.jpg' alt="" srcset="" />
            <div className='absolute left-[300px] bottom-[250px] text-white'>
                <div>
                    <h2 className='text-6xl font-bold'>WELCOME TO UNIVERSITY</h2>
                    <p className='text-center mt-3 text-4xl'>Awaken Possibility</p>
                    <button className='text-center text-white font-semibold ml-[300px] mt-4 btn bg-[#C25934] hover:text-black'>All Courses</button>
                </div>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
           <img src='https://rn53themes.net/themes/demo/education-master/images/slider/2.jpg' alt="" srcset="" />
            <div className='absolute left-[300px] bottom-[250px] text-white'>
                <div>
                    <h2 className='text-6xl font-bold'>ADMISSION OPEN 2023</h2>
                    <p className='text-center mt-3 text-4xl'>Don't miss a chance</p>
                    <button className='text-center text-white font-semibold ml-[300px] mt-4 btn bg-[#C25934] hover:text-black'>All Courses</button>
                </div>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
           <img src='https://rn53themes.net/themes/demo/education-master/images/slider/3.jpg' alt="" srcset="" />
            <div className='absolute left-[400px] bottom-[200px] text-white'>
                <div>
                    <h2 className='text-6xl font-bold'>EduHaven Master</h2>
                    <p className='text-center mt-3 text-4xl'>Awaken Possibility</p>
                    <button className='text-center text-white font-semibold ml-[170px] mt-4 btn bg-[#C25934] hover:text-black'>All Courses</button>
                </div>
            </div>
           </div>
        </SwiperSlide>
      </Swiper>
        </>
    );
};

export default Banner;