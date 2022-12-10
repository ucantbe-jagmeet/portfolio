import React, { useRef, useState } from 'react'
import "./testimonial.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus sed facilisis       egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin'
  },
  {
    avatar: AVTR2,
    name: 'Kwame Despite',
    review: 'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus sed facilisis       egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin'
  },
  {
    avatar: AVTR3,
    name: 'Max Walter',
    review: 'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus sed facilisis       egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin'
  },
  {
    avatar: AVTR4,
    name: 'Aziha Mahey',
    review: 'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus sed facilisis       egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper 
        className='container testimonials__container'
        modules={[Pagination]} 
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
      {
          data.map(({ avatar, name, review}, index) => {
            return(
                <SwiperSlide key={index} className='testimonial'>
                  <div className='client__avatar'>
                      <img src={avatar} alt='Image'/>
                  </div>
                  <h5 className='client__name' >{name}</h5>
                  <small className='client__review' >{review}</small>
                </SwiperSlide>
            )
          })
        }
        
      </Swiper>

    </section>
  )
}

export default Testimonials
