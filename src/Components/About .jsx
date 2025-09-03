import React, { useEffect } from 'react';
import { revealaboutText } from '../Utiles/Data'; 
import aboutImage from '../assets/About/img.png'

const About  = () => {

    useEffect(() => {
       revealaboutText();
    }, []);
    
  return (
    <div className='bg-white'>
        <div className='p-[2rem] '>
            <div className='flex flex-col flex-1 gap-[5rem]  xl:flex-row justify-center items-center'>
              <div className='about--text order-2 flex-col flex justify-center items-center'>
                <div className='w-full max-w-[500px]  '>
                   <h2 className='h2 mb-[1rem] text-center'> We Create The Art Of Stylish Living Stylishly</h2>
                    <p className='text-center '>At our core, we blend creativity with functionality to design spaces that inspire.
                    From concept to completion, every detail is crafted with purpose and passion.
                    Discover a lifestyle where elegance meets everyday living.</p>
                    <div className='flex justify-center items-center gap-[2rem] mt-[1.5rem]'>
                        <div className='bg-accentt/15 w-[93px] h-[93px]
                        flex justify-center items-center rounded-full'>
                            <i class='ri-phone-fill text-accentt text-4xl'></i>
                        </div>
                        <div className='text-left'>
                            <div className='text-2xl font-bold'>92125678396</div>
                            <div>Call Us Anytime </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-[2rem]'>
                    <button className='btn btn-primary '>
                     Get free estimation
                     <i class='ri-arrow-right-line text-accentt'></i>
                     </button>
                    </div>
                </div>
                </div> 
                {/* <div className='order-1 flex items-center justify-center xl:order-none max-w-[453px] '>
                   <div><img src={aboutImage} alt=""/></div>    
                </div> */}
                <div class="about--img order-1 xl:order-none flex items-center justify-center h-auto ">
                     <img src={aboutImage} alt="Centered Image" class="w-[530px]   h-auto" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About 