import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

function HeroSection() {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/services');
  };
  
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Let's Learn</h1>
      <p>Empower your future with our cutting-edge , designed to unlock your full potential.</p>
      <div className='hero-btns'>
        <button
        className='Try_demo_button'
        onClick={
          handleRedirect
        }
        >
          Try Demo
        </button>
        <button className='Premium_btn' >
          Premium
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
