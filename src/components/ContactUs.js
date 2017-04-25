import React from 'react';
import { Container } from 'reactstrap';
import MapContainer from './MapContainer';
import ContactForm from './ContactForm';
import ContactAddress from './ContactAddress';


const ContactUs = () => (
    <Container fluid id="contactus" className="contact bg-grey">
        <h4>CONTACT US</h4>    
        <p>You can contact me through the following contact or by filling the form below.</p>     
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