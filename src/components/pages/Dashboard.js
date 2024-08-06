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
              src='https://a5econsulting.com/wp-content/uploads/2023/10/Artboard-2-copy-jpg.webp'
              text='SAP BTP CAPM '
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