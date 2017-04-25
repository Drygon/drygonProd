import React from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import logo from "../images/drygon_name.svg";
import drygonCard from "../images/drygon_card.svg";

const Welcome = () => (
  <Container id="welcome">
    <h4>Welcome</h4>
    <div className="bg-grey" id="welcome-content">
      <p>Dear Reader,</p>
      <p>
        Thanks for visiting my website. There is a quotation which is the basis for why I started this
        {" "}
        <a href="http://drygon.ca" target="_blank"> Drygon </a>
        {" "}
        website:
        {" "}
        <q>If you have knowledge, let others light their candles by it.</q>
        {" "}
        I have reached a phase in my life where I choose to share my knowledge and experience for others to benefit from.
      </p>
      <p>
        So if you find some information on my website which may have helped make you better person - technically, or as a leader and project manager, or to even better understand life’s philosophies, then I would have achieved this purpose.
        {" "}
      </p>
      <p>
        And if you actually got value and personally benefitted from my website, then please consider making a donation to the link below to
        {" "}
        <a href="https://www.patreon.com/drygoninc" target="_blank">
          Patreon Account
        </a>
        {" "}
        to help fund and sustain this website so that it can continue to be available for others to benefit.
      </p>
      <br />
      <p>
        Sincerely,
      </p>
      <p id="signature">Tony Yep</p>
      <p>Drygon Consulting Inc.</p>
    </div>
  </Container>
);

const DrygonCard = ({ src, alt, width }) => (
  <Card block>
    <CardImg src={src} alt={alt} width={width} />
  </Card>
);

const Drygon = () => (
  <Container id="about-drygon">
    <h4>Drygon</h4>
    <p>
      <strong>Drygon Consulting Inc. </strong>
      {" "}
      is a company located in Calgary, Alberta, Canada, and it provides project and engineering management services. The website
      {" "}
      <a href="http://drygon.ca" target="_blank"> Drygon </a>
      {" "}
      is the home of the
      {" "}
      <em>Discipline Interface Charts</em>
      {" "}
      which were developed and designed by
      {" "}
      <strong> Tony Yep </strong>
      .  These drawings provide the detailed sequence of work activities and deliverables which should be maintained to ensure the successful execution of projects.  This website permits users to access these drawings for their personal use, plus related documentation to help improve their engineering, project control and management skills.
    </p>

    <p>
      The president of Drygon Consulting Inc. is
      {" "}
      <strong> Tony Yep </strong>
      {" "}
      who had been a professional engineer working at a major
      {" "}
      <acronym title="Engineering, Procurement, Construction "> EPC </acronym>
      {" "}
      company in Calgary for over 20 years.  There, he held positions of Mechanical Department Chief, Project Engineer, Manager of Engineering and Senior Project Manager working on large-scale projects related to the oilsands, petrochemical and refinery industry.  Tony was also a partner in a small engineering firm in Montreal executing many projects on a lump sum basis, from their inception to field commissioning and completion.
    </p>

    <h4>What is DRYGON ?? </h4>
    <p>
      This limerick was written by my son when he was seven years old.  He created the original
      {" "}
      <em> Drygon </em>
      {" "}
      creature.  I designed the mature Drygon which is incorporated in the company logo combining a powerful dragon with the mythical phoenix.
    </p>
    <br />
    <Container className="content">
      <Row className="align-items-center">
        <Col className="col col-sm-8">
          <DrygonCard
            id="drygon-card"
            src={drygonCard}
            alt="drygon card"
            width="100%"
          />
        </Col>
        <Col className="col col-sm-4">
          <DrygonCard
            id="drygon"
            src={logo}
            alt="drygon card logo"
            width="100%"
          />
        </Col>
      </Row>
    </Container>
  </Container>
);
const DrygonConsulting = () => (
  <div>
    <Container fluid id="aboutus">
      <h1>About Us</h1>
      <Welcome />
      <Drygon  />
    </Container>
  </div>
);

export default DrygonConsulting;
