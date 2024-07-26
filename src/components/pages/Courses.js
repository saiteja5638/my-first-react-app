import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Cards from '../Cards';
import CardItem from '../CardItem';
import Cour  from '../model/Courses.json'

export default function Courses()
{
    return(
        <>
        <Navbar />
        <div className='Courses_container'>
        {Cour.map((item, index) => (
          <div className='Proj_container_item' key={index}>
            <CardItem
              src={item.src}
              text={item.description}
              label={item.title}
              path={item.path}
            />
          </div>
        ))}
      </div>
        </>
    )
}