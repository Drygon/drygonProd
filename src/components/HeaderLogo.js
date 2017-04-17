import React from 'react';
import logo from '../images/logo_name_75.png';

const logoStyle = {   
    position: "relative",    
    display: "inline",
    margin: 0,    
  }

const spanStyle ={
  fontSize: 0,
  lineHeight: 0,
  position: "absolute",
}
  
const HeaderLogo = (props) => (
  <div style={logoStyle} >      
    <img src={logo} id="header-logo"
    alt="Logo Drygon Consulting Inc." 
    title="Logo Drygon Consulting Inc." />
    <span style={spanStyle} >Drygon Consulting Inc.</span>     
  </div>
);

export default HeaderLogo;