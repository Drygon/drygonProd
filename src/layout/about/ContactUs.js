import React from 'react';
import ContactAddress from './ContactAddress';
import ContactUsForm from './ContactUsForm';

const ContactUs = () => (

    <div className="drygoncontainer" id="contactus">
    <h4 className="blog-subtitle text-center">CONTACT US</h4>   
   
    <div className="blog-post">      
        <p>You can contact me via the following contact or by filling the form below.</p>  
      <div className="row align-items-center">
        <ContactAddress /> 
     </div>
             <div>
        <ContactUsForm />
             
             </div>     
        </div>    
    </div>  
  


);

export default ContactUs;