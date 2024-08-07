import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Cards from '../Cards';
import CardItem from '../CardItem';
import Cour  from '../model/Courses.json';
import Footer from '../Footer';

export default function Courses()
{
    return(
        <>
        <Navbar />
        <div className='Courses_container'>
        {Cour.map((item, index) => (
          <div className='Proj_container_item' key={index}>
            <CardItem
              src={item.img1}
              text={item.courses}
              label={item.title}
              path={`/view_detail?$cid=${item.id}`}
            />
          </div>
        ))}
      </div>
      <Footer/>
        </>
    )
}