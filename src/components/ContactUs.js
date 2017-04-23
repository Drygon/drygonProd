import React from 'react';
import { Container } from 'reactstrap';
import MapContainer from './MapContainer';
import ContactForm from './ContactForm';
import ContactAddress from './ContactAddress';


const ContactUs = () => (
    <Container className="contact bg-grey" fluid id="contactus">
        <h2>CONTACT US</h2>
        <div className="row justify-content-between">         
        <div className="map col-12 col-md-6">
            <MapContainer />
        </div>
        <div className="address col-12 col-md-6">
            <ContactAddress />
        </div>      
        </div>       
        <div className="contact-form col-12">
            <ContactForm />
        </div>
    </Container >
);

export default ContactUs;