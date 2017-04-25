import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ContactUs, DrygonConsulting, Footer, NavSide } from "../components";

const AboutUsPage = () => (
  <Container fluid className="content-wrapper">
    <Row>
      <Col md="3">
        <NavSide />
      </Col>
      <Col xs="12" md="9">
        <div className="content">
          <DrygonConsulting />
          <br />
          <ContactUs />
        </div>
      </Col>
    </Row>

    <Footer />
  </Container>
);

export default AboutUsPage;
