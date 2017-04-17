import React from 'react';
import { Container } from 'reactstrap';
import { ContactUs, Footer } from '../components';

const ContactUsPage = () => (
    <Container fluid className="content-wrapper">
        <div className="content">
        <ContactUs />        
        </div>
        <Footer />
    </Container>
);

export default ContactUsPage;