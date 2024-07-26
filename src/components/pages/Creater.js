import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Creater()
{
    return(
        <>
        <Navbar />
        <h1  className='Header_H1_Creater'  > Application Creater & Developer </h1>
        <div className='Creater_main_container' >
            <div className='Creater_Info_container' >
               <div className='Creater_head_content' >
                   <h1  > 
                    Spark <br></br> Sai teja Gupta 
                    </h1> 
               </div>
               <div className='Creater_descrption' >
                    <p>
                    I am a skilled developer specializing in SAP BTP CAPM, SAP UI5 Fiori, React JS, and Java. With extensive experience in these technologies, I have successfully developed a wide range of applications. My expertise spans across designing and implementing efficient and scalable solutions, whether it's creating dynamic user interfaces with SAP UI5 Fiori, building robust back-end services using SAP BTP CAPM, developing interactive and responsive front-end applications with React JS, or coding reliable and efficient software in Java. My portfolio includes numerous projects that demonstrate my ability to deliver high-quality software solutions tailored to meet the specific needs of clients and users.
                    </p>
               </div>
            </div>
            <div className='Creater_image' >
                    <img src='images/download-modified.png' className='Image12' /> 
            </div>

        </div>
        <Footer/>
        </>
    )
}