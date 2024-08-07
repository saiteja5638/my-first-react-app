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
                                    src="https://miro.medium.com/v2/resize:fit:1200/1*f-0MUEuaILWShigxdiqkjw.jpeg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={800} >
                                <img
                                    className='Car'
                                    src="https://nttdata-solutions.com/wp-content/usermedia/sap-btp-cloud-blog.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={800} >
                                <img
                                    className='Car'
                                    src="https://cdn.bap-software.net/2023/06/SAP-Application.webp"
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