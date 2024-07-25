import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Home() {
  return (
    <>
     <Navbar></Navbar>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
