import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Cards from '../Cards';
import CardItem from '../CardItem';
import modelData  from '../model/projects.json'

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
              label={item.description}
              path={item.path}
            />
          </div>
        ))}
      </div>
    </>
  );
}
