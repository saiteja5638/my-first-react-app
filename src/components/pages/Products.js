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
      <div className='Projects_container'>
        {modelData.map((item, index) => (
          <div className='Proj_container_item' key={index}>
            <CardItem
              src={item.src}
              text={item.title}
              
              path={`/view_detail?$id=${item.id}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
