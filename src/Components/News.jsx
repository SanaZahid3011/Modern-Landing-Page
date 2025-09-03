import React from 'react';

import newImage from '../assets/news/01.png'
import newImage1 from '../assets/news/02.png'
import newImage2 from '../assets/news/03.png'

const News = () => {

  return (
    <div>
        <section >
          <div className='text-center pt-[4rem] lg:pt-[6rem]'>
                <h2 className='testimonial--title h2 mb-[1rem]'>Article & News</h2>
                <p className='work--para max-w-3xl mx-auto lg:mb-[3rem]'>Stay updated with the latest trends in design, architecture, and innovation.
Our curated articles bring you expert insights and fresh perspectives.
Explore stories that inspire creativity and elevate your lifestyle.</p>
            </div>
            <div className='new--img m-[2rem] pt-[1rem] pb-[4rem]'>
                <div className='grid grid-cols-1 gap-12 place-items-center lg:grid-cols-3'>
                    <div className='w-full max-w-[382px] h-[510px] border border-primary hover:bg-accentt-secondary rounded-[62px] p-[20px]'>
                      <img src={newImage}/>
                      <div className='h3 pt-[1rem] pb-[1rem]'>
                        <h3>Let's Get Solution For Building Construction Work</h3>
                      </div>
                      <div className='flex justify-between pt-[1rem]'>
                        <p>22 June,2024</p>
                        <button className='bg-accentt-secondary hover:bg-white w-[52px] h-[52px] rounded-full'>
                            <i className='ri-arrow-right-s-line text-3xl text-primary pl-1'></i>
                        </button>
                      </div>
                    </div>

                     <div className='w-full max-w-[382px] h-[510px] border  hover:bg-accentt-secondary border-primary rounded-[62px] p-[20px]'>
                      <img src={newImage1}/>
                      <div className='h3 pt-[1rem] pb-[1rem]'>
                        <h3>Let's Get Solution For Building Construction Work</h3>
                      </div>
                      <div className='flex justify-between pt-[1rem]'>
                        <p>22 June,2024</p>
                        <button className='bg-accentt-secondary hover:bg-white w-[52px] h-[52px] rounded-full'>
                            <i className='ri-arrow-right-s-line text-3xl text-primary pl-1'></i>
                        </button>
                      </div>
                    </div>
                     <div className='w-full max-w-[382px] h-[510px] border  hover:bg-accentt-secondary border-primary rounded-[62px] p-[20px]'>
                      <img src={newImage2}/>
                      <div className='h3 pt-[1rem] pb-[1rem]'>
                        <h3>Let's Get Solution For Building Construction Work</h3>
                      </div>
                      <div className='flex justify-between pt-[1rem]'>
                        <p>22 June,2024</p>
                        <button className='bg-accentt-secondary hover:bg-white w-[52px] h-[52px] rounded-full'>
                            <i className='ri-arrow-right-s-line text-3xl text-primary pl-1'></i>
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default News