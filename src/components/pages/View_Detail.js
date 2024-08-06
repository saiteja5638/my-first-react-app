import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import modelData  from '../model/projects.json';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function View()
{
   
    const [searchParams] = useSearchParams();
    const id = searchParams.get('$id');

    let get_item = modelData.filter(i=>{
        return i.id == id
    })
    return(
        <>
        <Navbar />
            <div className='view_container' >
                <h1> {get_item[0].title} </h1>
            <div className='view_content' >
                <div className='text_content' >
                    <p> {get_item[0].description} </p>
                </div>
                <div className='image' >
                    <img src={get_item[0].src}   />
                </div>

            </div>    
            
            </div>
        <Footer/>
        </>
    )
}