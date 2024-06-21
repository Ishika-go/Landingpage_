import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'; // Import additional styles if needed

import { Navigation } from 'swiper/modules';

const logos = [
  'https://smsvaranasi.com/img/all-company-logo.jpg',
  'https://smsvaranasi.com/img/DTDC.png',
  'https://smsvaranasi.com/img/ICICI%20Bank.jpg',
  'https://smsvaranasi.com/img/IIFL.png',
  'https://smsvaranasi.com/img/Jindal.png',
  'https://smsvaranasi.com/img/Kellogs.jpg',
  'https://smsvaranasi.com/img/Vodafone.jpg',
  'https://smsvaranasi.com/img/Bajaj%20Consure%20Care.jpg',
  'https://smsvaranasi.com/img/Bandhan%20Bank.jpg',
  'https://smsvaranasi.com/img/Bharti%20Airtel.jpg',
  'https://smsvaranasi.com/img/Decathlon.jpg',
  'https://smsvaranasi.com/img/Ekta%20Engineering.jpg',
  'https://smsvaranasi.com/img/G4S.jpg',
  'https://smsvaranasi.com/img/ITC.jpg',
  'https://smsvaranasi.com/img/Kotak.jpg',
  'https://smsvaranasi.com/img/Pepsico.jpg',
  'https://smsvaranasi.com/img/TATA%20Capital.jpg',
  'https://smsvaranasi.com/img/TCI.jpg',
  'https://smsvaranasi.com/img/Thomas.jpg',
  'https://smsvaranasi.com/img/all-company-logo.jpg',
  'https://smsvaranasi.com/img/all-company-logo.jpg','https://smsvaranasi.com/img/all-company-logo.jpg',
  'https://smsvaranasi.com/img/all-company-logo.jpg',
  'https://smsvaranasi.com/img/all-company-logo.jpg',
  'https://smsvaranasi.com/img/all-company-logo.jpg',
  'https://smsvaranasi.com/img/all-company-logo.jpg',
  'https://smsvaranasi.com/img/all-company-logo.jpg',
  'https://smsvaranasi.com/img/all-company-logo.jpg',
  'https://smsvaranasi.com/img/all-company-logo.jpg',
  'https://smsvaranasi.com/img/all-company-logo.jpg',
];

const AutoSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    if (swiper) {
      const interval = setInterval(() => {
        if (swiper.isEnd) {
          swiper.slideTo(0, 0, false);
        } else {
          swiper.slideNext();
        }
      }, 2000); 

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      direction="horizontal"
      slidesPerView="auto"
      centeredSlides={true}
      loop={true} 
      spaceBetween={10}
     
      style={{ width: '100%', height: '55px', overflow: 'hidden', marginTop:'10%', paddingBottom:'80px' }}
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index} style={{ width: 'auto', height: '100%' }}>
          <img src={logo} alt={`Logo ${index}`} style={{ height: '100%', objectFit: 'contain' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AutoSwiper;
