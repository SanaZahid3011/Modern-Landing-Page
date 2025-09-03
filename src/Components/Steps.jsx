import React, { useEffect } from 'react';
import { revealstepText  } from '../Utiles/Data'; 

const Steps = () => {
     useEffect(() => {
        revealstepText();
      }, []);

  return (
    <div className='bg-white pb-[6rem] pt-[7rem]'>
        <div className='steps--step grid grid-cols-1  xl:grid-cols-3 gap-12 justify-items-center pl-[2rem] pr-[2rem] lg:pl-[4rem] lg:pr-[4rem] '>
            <div className='h-auto max-w-[300px]'>
                <div className='flex justify-center'>
                    <i class='ri-compasses-2-line text-5xl text-accentt'></i>
                </div>
                <h3 className='text-center  mt-4 mb-4'>Project Planning</h3>
                <p className='text-center mb-5'> Our team maps out every detail 
                from materials to milestones so your project runs smoothly from start to finish.</p>
                <a href='#'  className=' font-medium flex justify-center'>Read more
                <i class='ri-arrow-right-line  text-accentt'></i></a>
            </div>

            <div className='h-auto max-w-[350px] '>
                 <div className='flex justify-center'>
                    <i class='ri-magic-line text-5xl text-accentt'></i>
                </div>
                <h3 className='text-center  mt-4 mb-4'>Gaining Materials</h3>
                <p className='text-center mb-5'>We handle the selection and procurement of top-grade materials,
                 ensuring your project stays on track with quality you can trust.</p>
                <a href='#'  className=' font-medium flex justify-center'>Read more
                <i class='ri-arrow-right-line  text-accentt'></i></a>
            </div>

            <div className='h-auto max-w-[300px] '>
                 <div className='flex justify-center'>
                    <i class='ri-tools-line text-5xl text-accentt'></i>
                </div>
                <h3 className='text-center mt-4 mb-4'>Project Execution</h3>
                <p className='text-center mb-5'>We turn plans into reality by managing 
                execution process, delivering quality results on time and within budget</p>
                <a href='#' className=' font-medium flex justify-center'>Read more
                <i class='ri-arrow-right-line  text-accentt'></i></a>
            </div>
        </div>
    </div>
  )
}

export default Steps