import React from 'react'
import LCorneredBorder from '../HeroSec/LCorneredBorder'
import CardForBest from './CardForBest'
import flower1 from "../../assets/images/our-best-2-edited.png";
import flower2 from "../../assets/images/ourbest1.png";
import flower3 from "../../assets/images/Untitled_design-removebg-preview.png";
import flower4 from "../../assets/images/Calat-O2-plant-cropped.png";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const OurBest2 = () => {
  const cardOfOurBest =[
      {
    imgName: flower1,
    number: 1
  },
        {
    imgName: flower2,
    number: 2
  },
        {
    imgName: flower3,
    number: 3
  },
        {
    imgName: flower4,
    number: 4
  },

];   
  return (
    <div>

       <div className='text-center'>
           <LCorneredBorder title={"Our Best o2"}/>
       </div>

      <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  spaceBetween={20}
  slidesPerView={'auto'}
  centeredSlides={true}
  loop={true}
  pagination={{ clickable: true }}
  breakpoints={{
    768: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 1,
      centeredSlides: false,
    },
  }}
>
          {cardOfOurBest.map(({imgName, number}, index) => (
           <SwiperSlide key={index} className=''>
  <CardForBest img={imgName} number={number}/>
</SwiperSlide>
          ))}
          

        </Swiper>

      <style>{`
        .swiper-pagination {
          margin-top: 40px !important;
          position: relative !important;

        }
            .swiper-pagination-bullet {
    background-color: white !important; /* Inactive dots */
    opacity: 0.3;
    box-shadow: 0 2px 5px #ffff;
  border-radius: 50%;
  }

  .swiper-pagination-bullet-active {
    background-color: white !important; /* Active dot */
    opacity: 1;
    transform: scale(1.2);
  }
      `}</style>
      
    </div>
  )
}

export default OurBest2
