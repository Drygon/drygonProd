import React from 'react';

const Footer = () => (
  <footer className="footer text-center">   
      <div className="drygoncontainer justify-content-center">      
        <h2>Get in touch</h2>
         <ul className="contact container-fluid">
          <li><a target="_blank" href="https://www.linkedin.com/in/tony-yep-721b2337/" className="icon fa-linkedin fa-lg fa-border">
            <span className="label">linkedin</span>
          </a></li>
          <li><a target="_blank" href="http://www.youtube.com/channel/UCS-pKWWh_L7wYn8U6nz-zhA" className="icon fa-youtube fa-lg fa-border">
            <span className="label">youtube</span>
          </a></li>
        </ul>      
      </div>
      <div className="copyright">
        <ul>
          <li>&copy; Copyright 2017 Drygon Consulting Inc. All rights reserved</li>
          <li>Design & Program By: <a href="https://hjzi.github.io/">
            <span>Hui Jie Zi Consult Corp.</span>
          </a></li>
        </ul>
      </div>   
  </footer>
)

export default Footer;