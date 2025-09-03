import React from 'react'
// import bgImage from './assets/hero/bg.jpg'
// import gridImage from './assets/grid.png' 
// import logo from './assets/logo.svg';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Steps from './Components/Steps';
import About from './Components/About ';
import Cards from './Components/Cards';
import Brands from './Components/Brands';
import Work from './Components/Work';
import Stats from './Components/Stats';
import News from './Components/News';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className=''>
    <Navbar/>
    <Hero/>
    <Steps/>
    <About/>
    <Cards/>
    <Brands/>
    <Work/>
    <News/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
