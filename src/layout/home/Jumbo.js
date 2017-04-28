import React from 'react';
import logo from '../../images/logo_origin_75.png';
import title from '../../images/title_75.png';

const Jumbo = () => (
    <div className="jumbotron">
    <div className="container-fluid mx-auto" id="banner">     
          <img src={logo} alt="Logo Header" className="img-fluid p-2" id="banner-logo" />    
          <img src={title} alt="title" className="img-fluid p-2" id="banner-title" />          
    </div>
    </div>  
);

export default Jumbo;