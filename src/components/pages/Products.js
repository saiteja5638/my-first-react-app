import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Cards from '../Cards';
import CardItem from '../CardItem';
import modelData  from '../model/projects.json';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function Products() {
  return (
    <>
      <Navbar />
      <h1 className='Projects_header_h1' >Unlock your potential with our premium projects. Dive in and find your perfect match today!</h1>
      <div className='Projects_container'>
        {modelData.map((item, index) => (
          <div className='Proj_container_item' key={index}>
            <CardItem
              src={item.img1}
              text={item.title}
              
              path={`/view_detail?$id=${item.id}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
