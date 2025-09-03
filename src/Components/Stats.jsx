import React, { useEffect } from 'react';
import { revealaboutText } from '../Utiles/Data'; 

const Stats = () => {

     useEffect(() => {
             revealaboutText();
          }, []);

  return (
    <div className='stats bg-accentt-secondary pt-[1rem] pb-[1rem]'>
        <div className=' stats m-[2rem]  pt-[1rem] pb-[1rem] text-center grid grid-cols-1 gap-[2rem] lg:grid-cols-2 xl:grid-cols-4'>
            <div className='xl:border-r xl:border-accentt lg:border-r lg:border-accentt'>
                <h3 className='h1 font-primary '>12</h3>
                <p className='text-accentt'> Years Of Experience</p>
            </div>
              <div className='xl:border-r xl:border-accentt'>
                <h3 className='h1 font-primary '>85</h3>
                <p className='text-accentt'>Projects Completed</p>
            </div>
              <div className='xl:border-r xl:border-accentt lg:border-r lg:border-accentt'>
                <h3 className='h1 font-primary '>15</h3>
                <p className='text-accentt'>Achive Projects</p>
            </div>
              <div >
                <h3 className='h1 font-primary '>95</h3>
                <p className='text-accentt'> Happy Customers</p>
            </div>
        </div>
    </div>
  )
}

export default Stats