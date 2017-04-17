import React from 'react';
import { Container } from 'reactstrap';

const ContactAddress = () => (
  <Container>
    <address>
     Drygon Consulting Inc.<br />
      Project & Engineering Management<br />
      Tony YEP P.Eng<br />
      <span className="fa fa-map-marker"></span> Calgary, Alberta<br />
      <span className="fa fa-phone"></span>(587)719-8423<br />
      <span className="fa fa-envelope-o"></span><a href="mailto:t_yep@shaw.ca">t_yep@shaw.ca</a><br />
    </address>
  </Container>
);

export default ContactAddress;