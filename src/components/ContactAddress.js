import React from 'react';
import { Container } from 'reactstrap';

const ContactAddress = () => (
  <Container id="contactus">
    <address>
     Drygon Consulting Inc.<br />
      Project & Engineering Management<br />
      Tony YEP P.Eng<br />
      <span className="fa fa-map-marker"></span> Calgary, Alberta<br />
      <span className="fa fa-mobile"></span>(587) 719-8423<br />
      <span className="fa fa-envelope-o"></span><a href="mailto:drygoninc@gmail.com">drygoninc@gmail.com</a><br />
    </address>
  </Container>
);

export default ContactAddress;