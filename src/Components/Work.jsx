import React, { useEffect } from 'react';
import { revealaboutText } from '../Utiles/Data'; 
import Image1 from '../assets/work/01.png';
import Image2 from '../assets/work/02.png';
import Image3 from '../assets/work/03.png';
import Image4 from '../assets/work/04.png';
import Stats from './Stats';

const Work = () => {

    useEffect(() => {
         revealaboutText();
      }, []);

  return (
    <div>
    <div className='text-center'>
      <h2 className='work--title h2 mb-[1rem]'>Follow Our Projects</h2>
      <p className='work--para max-w-3xl mx-auto lg:mb-[3rem]'>Discover how we bring ideas to life through thoughtful design and flawless execution.
Our projects reflect a blend of creativity, functionality, and attention to detail.
Stay connected and watch as we transform spaces into meaningful experiences.</p>
    </div>
    <div className='work--img bg-white m-[2rem] grid grid-cols-1 place-items-center lg:grid-cols-2 '>
        <div className='mb-[2rem]'>
            <div className='w-full max-w-[448px] h-full mx-auto '>
                <img src={Image1} alt=""/>
            </div>
            <div className='flex justify-between mt-[2rem]'>
              <div>
                <h3>Modern Kitchen</h3>
                <p>Decor/Architecture</p>
              </div>
              <button className=' bg-accentt w-[60px] h-[60px] hover:bg-accentt/20 rounded-full'>
                <i className='ri-arrow-right-s-line text-3xl text-primary pl-1'></i>
              </button>
            </div>
        </div>
         <div className='mb-[2rem]'>
            <div className='w-full max-w-[448px] h-full mx-auto '>
                <img src={Image2} alt=""/>
            </div>
            <div className='flex justify-between mt-[2rem]'>
              <div>
                <h3>Modern Kitchen</h3>
                <p>Decor/Architecture</p>
              </div>
              <button className=' bg-accentt w-[60px] h-[60px] hover:bg-accentt/20 rounded-full'>
                <i className='ri-arrow-right-s-line text-3xl text-primary pl-1'></i>
              </button>
            </div>
        </div>
         <div className='mb-[2rem]'>
            <div className='w-full max-w-[448px] h-full mx-auto'>
                <img src={Image3} alt=""/>
            </div>
            <div className='flex justify-between mt-[2rem]'>
              <div>
                <h3>Modern Kitchen</h3>
                <p>Decor/Architecture</p>
              </div>
              <button className=' bg-accentt w-[60px] h-[60px] hover:bg-accentt/20 rounded-full'>
                <i className='ri-arrow-right-s-line text-3xl text-primary pl-1'></i>
              </button>
            </div>
        </div>
         <div className='mb-[2rem]'>
            <div className='w-full max-w-[448px] h-full mx-auto'>
                <img src={Image4} alt=""/>
            </div>
            <div className='flex justify-between mt-[2rem]'>
              <div>
                <h3>Modern Kitchen</h3>
                <p>Decor/Architecture</p>
              </div>
              <button className=' bg-accentt w-[60px] h-[60px] hover:bg-accentt/20 rounded-full'>
                <i className='ri-arrow-right-s-line text-3xl text-primary pl-1'></i>
              </button>
            </div>
        </div>
</div>
<Stats/>
    </div>
  )
}

export default Work