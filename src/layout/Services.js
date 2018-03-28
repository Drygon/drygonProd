import React from "react";
import { ServiceHeader, ServiceBody } from "./services";
import Footer from "./Footer";

const Services = () => (
  <div className="drygoncontainer" id="service" >
    <div className="content-wrapper">
      <div className="container">
        <ServiceHeader />
        <ServiceBody />
      </div>
    </div>
    <Footer />
  </div>
);

export default Services;
