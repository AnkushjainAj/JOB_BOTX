import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Partners from '../components/sections/Partners';
import Services from '../components/sections/Services';
// import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import Footer from '@/components/Footer';
import Image from "next/image";
import GuidePage from '@/components/Guide';
import Testimonials from '@/components/testimonials';
import Service from '@/components/Ourservices';
import Contact from '@/components/Contact';
// import Footer from "../../Components/Footer";


function App() {
  return (
    <div className="min-h-screen bg-white font-jost">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Partners />
        {/* <Services /> */}
        {/* <Testimonials /> */}
        {/* <CTA /> */}
         <GuidePage/>
    <Service/> 
    <Testimonials/>
    <Contact/>

    <Footer/>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;