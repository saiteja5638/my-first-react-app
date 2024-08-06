import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CardItem from '../CardItem';

export default function Dashboard()
{
    return(
        <>
        <Navbar />
            <div className='dashboard_main_container' >
                <div className='container_apps' >
                <div className='Card_item' >
                <CardItem
              src='https://thumbs.dreamstime.com/b/print-172241497.jpg'
              text='Tech Experts'
              label='Trending'
              path='/services'
            />
                </div>

                </div>
      
            </div>
        <Footer/>
        </>
    )
}