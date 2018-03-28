import React from "react";
import { AboutHeader, ContactUs, Drygon, Welcome } from "./about";
import Footer from "./Footer";

const SubNav = () => (
     <div className="container" id="subnav">
      <ul className="nav nav-tabs nav-fill" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link btn btn-outline-secondary"
            href="#welcome"
            data-toggle="tab"
          >
            Welcome
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link btn btn-outline-secondary"
            href="#about-drygon"
            data-toggle="tab"
          >
            Drygon
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link btn btn-outline-secondary"
            href="#contactus"
            data-toggle="tab"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
 
);
const About = () => (
  <div className="drygoncontainer" >
  <div className="container" >   
    <AboutHeader />
    <SubNav />
    <div className="container" id="about">
      <div className="row">       
          <div className="container tab-content">
            <div className="tab-pane active" id="welcome" role="tabpanel">
              <Welcome />
            </div>
            <div className="tab-pane" id="about-drygon" role="tabpanel">
              <Drygon />
            </div>
            <div className="tab-pane" id="contactus" role="tabpanel">
              <ContactUs />
            </div>
          </div>
        </div>      
    </div>
  </div>
    <Footer />
  </div>
);

export default About;
