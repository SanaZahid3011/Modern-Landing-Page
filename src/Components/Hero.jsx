import React, { useEffect } from 'react';
import { revealHeroText } from '../Utiles/Data'; 
import bgImage from '../assets/hero/bg.jpg'
// import gridImage from '../assets/grid.png' 
const Hero = () => {

  useEffect(() => {
    revealHeroText();
  }, []);
  
  return (
    <div>
        <main className='max-w-[1920px] max-auto bg-white overflow-hideen'>
                 {/* <div
                  className='fixed top-0 bottom-0 left-0 right-0 z-0'
                  style={{
                    backgroundImage: `url(${gridImage})`,
                    backgroundRepeat: 'repeat-y',
                    backgroundPosition: 'center',
                  }}
                /> */}
                <section className=' h-[640px] xl:h-[740px] bg-cover bg-center lg:bg-cover bg-no-repeat bg-fixed 
                xl:rounded-bl-[290px] relative z-20' style={{ backgroundImage: `url(${bgImage})`}}>
                  <div className='mx-auto h-full flex items-center justify-center xl:justify-start xl:ml-[9rem]' style={{padding :'15px'}}>
                    <div className='hero--text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start '>
                    <h1 className='h1 mb-8'>Let Your Home Be Unique</h1>
                    <p className='mb-8'>We craft spaces with meaning, elegance, and purpose.
                     Because your home deserves more than ordinary.</p>
                     <button className='btn btn-primary mx-auto xl:mx-0'>
                     Get free estimation
                     <i class='ri-arrow-right-line text-accentt'></i>
                     </button>
                    </div>
                  </div>
                </section>
              </main>
              
    </div>
  )
}

export default Hero