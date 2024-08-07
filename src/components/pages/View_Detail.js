import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import modelData from '../model/projects.json';
import { useLocation, useSearchParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export default function View() {

    const [searchParams] = useSearchParams();
    const id = searchParams.get('$id');

    let get_item = modelData.filter(i => {
        return i.id == id
    })
    return (
        <>
            <Navbar />
            <div className='view_container' >
                
                    <div className='image' >
                        <Carousel data-bs-theme="dark" className='Car1' >
                            <Carousel.Item interval={800} >
                                <img
                                    className='Car'
                                    src={get_item[0].img1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={800} >
                                <img
                                    className='Car'
                                    src={get_item[0].img2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={800} >
                                <img
                                    className='Car'
                                    src={get_item[0].img3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='view_detail_descrp' >
                    <h1 className='view_detail_descrp_H1'  > {get_item[0].title} </h1>
                    <div className='view_detail_descrp_content' >
                        <p>{get_item[0].description} </p>
                    </div>

                    </div>
            </div>
            <Footer />
        </>
    )
}