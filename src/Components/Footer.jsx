import React from 'react'
import logo from '../assets/logo.svg';
const Footer = () => {
  return (
    <div className='bg-accentt-secondary mt-[5rem]'>
        <div className='p-[1rem] place-items-center h-auto'>
          <div className=' w-full grid grid-cols-1 gap-[2rem] lg:grid-cols-2 xl:flex xl:flex-4 xl:justify-around p-[5rem]'>
            <div className='new--img max-w-[410px]'>
              <a href='#'>
                <img src={logo} alt=""/>
              </a>
              <p>We craft spaces with meaning, elegance, and purpose.
                     Because your home deserves more than ordinary.</p>
              <ul className='flex text-3xl gap-[1rem] '>
                <li><i className='ri-facebook-fill'></i></li>
                <li><i className='ri-twitter-fill'></i></li>
                <li><i className='ri-linkedin-fill'></i></li>
                <li><i className='ri-instagram-fill'></i></li>
                <li><i className='ri-whatsapp-fill'></i></li>
                <li><i className='ri-tiktok-fill'></i></li>
              </ul>
            </div>
            <div className='new--img'>
                <p className='h3 font-bold'>Pages</p>
                <p>About</p>
                <p>Testimonial</p>
                <p>News</p>
                <p>Contact</p>
            </div>
               <div className='new--img'>
                <p className='h3 font-bold'>Services</p>
                <p>Kitchen</p>
                <p>Living Area</p>
                <p>Bathroom</p>
                <p>Bedroom</p>
            </div>
            <div>
                <p className='new--img h3 font-bold'>Contact</p>
                <p className='new--img'>Lets get in touch </p>
                <p className='new--img'>+92378464884</p>
                <p className='new--img'>Mon to Sat-11:00 to 8:00</p>
                <p className='new--img'>Hotel Sunfort Building 24-G,liberty Gulberg Punjab</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer