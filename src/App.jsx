import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/campus/campus';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='What We Offer' title="Our Program" />
        <Programs/>
        <About setPlayState={setPlayState} />
        <Title subTitle='Campus Photos' title='gallery' />
        <Campus/>
        <Title subTitle="What Student Says" title="testimonials"/>
        <Testimonial/>
        <Title subTitle="Contact Us" title="Get in touch"/>
        <Contact/>
        <Footer/>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </>
  )
}

export default App