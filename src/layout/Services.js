import React from 'react';
import { ServiceHeader, ServiceBody } from './services';
import Footer from './Footer';

const Services = () => (

    <div className="content-wrapper" id="service" >    
    <div className="container">
            <ServiceHeader />
            <ServiceBody />    
    </div>
              <Footer />     
    </div>             
   
);


export default Services;