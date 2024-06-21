import CardSection from './CardSection/Card';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
      style={{marginTop:'10%'}}
      spaceBetween={5} 
      slidesPerView={4} // Show 3 slides per view
    
      
       navigation={true} modules={[Navigation]} 
       className="mySwiper">
        <SwiperSlide><CardSection /></SwiperSlide>
        <SwiperSlide><CardSection /></SwiperSlide>
        <SwiperSlide><CardSection /></SwiperSlide>
        <SwiperSlide><CardSection /></SwiperSlide>
        <SwiperSlide><CardSection /></SwiperSlide>
        <SwiperSlide><CardSection /></SwiperSlide>
        <SwiperSlide><CardSection /></SwiperSlide>
        <SwiperSlide><CardSection /></SwiperSlide>
        <SwiperSlide><CardSection /></SwiperSlide>
      </Swiper>
    </>
  );
}

