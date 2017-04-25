import React from 'react';
import { CardDeck, Container, Row } from 'reactstrap';
import { Banner, DrawingSnap, Footer, PhotoSnap, QuotationSnap } from '../components';

const HomePage = () => (
  <Container fluid className="content-wrapper" id="homepage">
    <Banner />
    <Container className="content">
      <Row>
        <DrawingSnap />
      </Row>
      <Row>
        <CardDeck>
          <PhotoSnap />
          <QuotationSnap />
        </CardDeck>
      </Row>
    </Container>
    <Footer />
  </Container>
);

export default HomePage;