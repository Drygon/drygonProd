import React from 'react';
import { Card, CardImg } from "reactstrap";
import logo from "../../images/drygon_name.svg";
import drygonCard from "../../images/drygon_card.svg";


const DrygonCard = ({ src, alt, width }) => (
  <Card block>
    <CardImg src={src} alt={alt} width={width} />
  </Card>
);

const Drygon = () => (
  <div className="container-fluid" id="about-drygon">
    <h4 className="blog-subtitle text-center">Drygon</h4>
    <div className="container">
    <div className="row">
    <div className="blog-post">
    <p><strong>Drygon Consulting Inc. </strong>    
      is a company located in Calgary, Alberta, Canada, and it provides project and engineering management services. The website<a href="http://drygon.ca" target="_blank"> Drygon </a>   is the home of the <em>Discipline Interface Charts</em>which were developed and designed by<strong> Tony Yep </strong>. These drawings provide the detailed sequence of work activities and deliverables which should be maintained to ensure the successful execution of projects.  This website permits users to access these drawings for their personal use, plus related documentation to help improve their engineering, project control and management skills.
    </p>
    <p>The president of Drygon Consulting Inc. is <strong> Tony Yep </strong>who had been a professional engineer working at a major<acronym title="Engineering, Procurement, Construction "> EPC </acronym>company in Calgary for over 20 years.  There, he held positions of Mechanical Department Chief, Project Engineer, Manager of Engineering and Senior Project Manager working on large-scale projects related to the oilsands, petrochemical and refinery industry.  Tony was also a partner in a small engineering firm in Montreal executing many projects on a lump sum basis, from their inception to field commissioning and completion.
    </p>
    <h4 className="blog-subtitle">What is DRYGON ?? </h4>
    <p>This limerick was written by my son when he was seven years old.  He created the original<em> Drygon </em>creature.  I designed the mature Drygon which is incorporated in the company logo combining a powerful dragon with the mythical phoenix.
    </p>     
      <div className="row text-center">
        <div className="col col-sm-8">
          <DrygonCard
            id="drygon-card"
            src={drygonCard}
            alt="drygon card"
            width="100%"
          />
        </div>
        <div className="col col-sm-4">
          <DrygonCard
            id="drygon"
            src={logo}
            alt="drygon card logo"
            width="100%"
          />
        </div>     
    </div>
    </div>
    </div>
    </div>    
  </div>
);

export default Drygon;