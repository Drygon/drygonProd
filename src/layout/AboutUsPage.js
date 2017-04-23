import React from 'react';
import { Container } from 'reactstrap';
import { ContactUs, DrygonConsulting, Footer } from '../components';

const AboutUsPage = () => (
    <Container fluid className="content-wrapper">  
        <div className="content">
            <DrygonConsulting />
            <ContactUs />  
        </div>
        <Footer />
    </Container>

);

export default AboutUsPage;