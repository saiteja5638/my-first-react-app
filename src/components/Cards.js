import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the Trending Course's</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://a5econsulting.com/wp-content/uploads/2023/10/Artboard-2-copy-jpg.webp'
              text='SAP BTP CAPM '
              label='Trending'
              path='/services'
            />
            <CardItem
              src='https://futurelabstechnology.com/wp-content/uploads/elementor/thumbs/SAP-ABAP-ON-HANA-01-4-q5ovox1kxv5wjbk929f09nudmvokrci0ynudfqq5p4.jpg'
              text='SAP ABAP on HANA '
              label='Trending'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKgyHpEHbeEjEWi74QGD6RB3x1Nibj67QqZ8SA_GOxgDF34ncKadaTefMK5gMOs1DkCk&usqp=CAU'
              text='SAP IBP'
              label='Trending'
              path='/services'
            />
            <CardItem
              src='https://clickysoft.com/wp-content/uploads/2023/11/Benefits-of-MERN-Stack-Developers.jpg'
              text='Mern Stack Development'
              label='Trending'
              path='/services'
            />
            <CardItem
              src='https://online-technobridge.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_19.jpg'
              text='Full Stack Java '
              label='Trending'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
