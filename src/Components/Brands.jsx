import React, { useEffect } from 'react';
import { revealaboutText } from '../Utiles/Data'; 
import brandImage1 from '../assets/brands/01.svg';
import brandImage2 from '../assets/brands/02.svg';
import brandImage3 from '../assets/brands/03.svg';
import brandImage4 from '../assets/brands/04.svg';
import brandImage5 from '../assets/brands/05.svg';
const Brands = () => {

       useEffect(() => {
           revealaboutText();
        }, []);
        
  return (
    <div className='mt-[2rem]'>
        <section>
            <div className='m-[5rem] '>
                <div className=' grid grid-cols-1 gap-12 place-items-center lg:flex lg:justify-around '>
                    <img className='brands--img' src={brandImage1} alt=""/>
                    <img className='brands--img' src={brandImage2} alt=""/>
                    <img className='brands--img' src={brandImage3} alt=""/>
                    <img className='brands--img' src={brandImage4} alt=""/>
                    <img className='brands--img' src={brandImage5} alt=""/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Brands