import React, { useEffect } from 'react';
import { revealaboutText } from '../Utiles/Data'; 
import Product from "../Utiles/Data"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
   const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1150, // screen width <= 960px
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 800, // screen width <= 768px
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480, // screen width <= 480px
      settings: {
        slidesToShow: 1
      }
    }
  ]
};
    useEffect(() => {
       revealaboutText();
    }, []);

  return (
    <div className='testimonial--card bg-accentt-secondary mt-[5rem] m-[2rem] rounded-[70px]' >
       <h1 className='testimonial--title h2 font-primary pt-[3rem] pb-[2rem] text-center'>What client say</h1>
      <div className='testimonial--slider text-center pb-[3rem]'>
       <Slider {...settings}>
        {Product.map((item, index) => (
          <div key={index} className='bg-white p-[2rem] max-w-[350px] mb-[2rem] text-left rounded-[20px]' >
          <div className='flex gap-[1.5rem]'>
            <div>
              <img src={item.image} alt='' />
            </div>
            <div>
              <h5>{item.name}</h5>
              <p className='text-lg'>Greenville, USA</p>
            </div>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default Cards;
