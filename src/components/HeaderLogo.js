import React from 'react';
import logo from '../images/logo_name_50.png';

const spanStyle ={
  fontSize: 0,
  lineHeight: 0,
  position: "absolute",
  float: "nont",
}
  
const HeaderLogo = (props) => (
  <div >      
    <img src={logo} id="header-logo"
    alt="Logo Drygon Consulting Inc." 
    title="Logo Drygon Consulting Inc." />
    <span style={spanStyle} >Drygon Consulting Inc.</span>     
  </div>
);

export default HeaderLogo;