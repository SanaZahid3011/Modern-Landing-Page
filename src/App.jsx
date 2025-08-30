import React from 'react'
import bgImage from './assets/hero/bg.jpg'
import gridImage from './assets/grid.png' 

const App = () => {
  return (
    <div className='bg-gray-100'>
      <main className='max-w-[1920px] max-auto bg-white overflow-hideen'>
      {/* <div className='xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 right-0 left-0'></div> */}
         <div
          className='fixed top-0 bottom-0 left-0 right-0 z-0'
          style={{
            backgroundImage: `url(${gridImage})`,
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'center',
          }}
        />
        <section className='mb-[500px] h-[640px] xl:h-[840px] bg-cover bg-center lg:bg-cover bg-no-repeat bg-fixed 
        xl:rounded-bl-[290px] relative z-20' style={{ backgroundImage: `url(${bgImage})`}}>
          <div className='mx-auto h-full flex items-center justify-center xl:justify-start' style={{padding :'15px'}}>
            <div className='hero--text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start '>
            <h1 className='h1'>Let Your Home Be Unique</h1>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
