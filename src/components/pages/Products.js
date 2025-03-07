import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';

import { useLocation, useSearchParams } from 'react-router-dom';

export default function Products() {
  return (
    <>
      <Navbar />
      <h1 className='Projects_header_h1' >You Have Successfully Signup,Our Representative will contact soon </h1>
      <div className='Projects_container'>
         <img  src="https://cdn.dribbble.com/userupload/22333996/file/original-6ac4030147adbe5d9381c4600c79eccb.gif" className='imahe' />
      </div>
    </>
  );
}
