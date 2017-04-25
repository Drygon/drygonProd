import React from "react";

const NavSide = () => (
  <aside className="sidebar nav fixed" id="navside" >  
   <ul className="nav nav-pills nav-stacked flex-row flex-md-column" data-spy="affix" data-offset-top="200">
   <li className="nav-item">
      <a className="nav-link" href="#welcome">Welcome</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#about-drygon">Drygon</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#contactus">Contact Us</a>
    </li>
   
   </ul>

  </aside>
);

export default NavSide;
