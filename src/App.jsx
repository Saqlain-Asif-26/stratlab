import React from 'react'
import Notification from './components/Notification';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Hero2 from './components/Hero2';
import Summery from './components/Summery';
import Hero3 from './components/Hero3';
import Banner2 from './components/Banner2';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import LastHero from './components/LastHero';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Notification />
      <Navbar />
      <Hero />
      <Feature />
      <Hero2 />
      <Summery />
      <Hero3 />
      <Banner2 />
      <Pricing />
      <Testimonials />
      <LastHero />
      <Footer />
    </div>
  )
}

export default App