import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import logo from '../images/logo_origin_75.png';
import title from '../images/title_75.png';

const Banner = (props) => (
  <Jumbotron className="banner" fluid>
    <Container fluid>       
       <div>
          <img src={logo} alt="Logo Header" className="img-fluid p-2 banner-logo" />       
          <img src={title} alt="title" className="img-fluid p-2 banner-title" />  
      </div>    
    </Container>
  </Jumbotron>
);

export default Banner;