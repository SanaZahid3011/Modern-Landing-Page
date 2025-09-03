import React, { useState } from 'react'
import logo from '../assets/logo.svg';
const Navbar = () => {
    const[menuIcon,setmenuIcon]=useState(false);

    const onMenuIcon=()=>{
        setmenuIcon(!menuIcon);
    }
  return (
    <div>
         <header className='sticky top-0 h-[90px] shadow-2xl z-30 bg-white '>
             <div className='mx-auto flex justify-between'  style={{padding :'15px'}} >
             <div>
              <a href='#'>
               <img src={logo} alt=""/>
               </a>
              </div>
               <div>
                <ul className='hidden lg:flex gap-[1.5rem] mr-[3rem] '>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>About</a></li>
                  <li><a href='#'>Testimonials</a></li>
                  <li><a href='#'>Our work</a></li>
                  <li><a href='#'>News</a></li>
                  <li><a href='#'>Contact</a></li>
                </ul>
                <div>
                <i class='ri-menu-4-line cursor-pointer text-4xl text-primary lg:hidden mr-[1rem]' onClick={onMenuIcon}></i>
                </div>
               </div>
             </div>
             
            </header>
            {/* {menuIcon&&
            <div className='bg-white ' >
                <ul className='bg-white overflow-hidden w-full absolute top-23 pl-[3rem] pt-[1rem] pb-[1rem]
                cursor-pointer z-40 '>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>About</a></li>
                  <li><a href='#'>Testimonials</a></li>
                  <li><a href='#'>Our work</a></li>
                  <li><a href='#'>News</a></li>
                  <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            } */}
            <div className={`
        transition-all duration-800 ease-in-out overflow-hidden lg:hidden bg-white absolute top-[92px] w-full z-40
            ${menuIcon ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
          `}>
          <ul className='pl-[3rem] pt-[1rem] pb-[1rem] space-y-2'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Testimonials</a></li>
            <li><a href='#'>Our work</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        
    </div>
  )
}

export default Navbar