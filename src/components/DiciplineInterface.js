import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChartImage from './ChartImage';
import chartA from '../images/DCI-100-A-small.png';
import chartB from '../images/DCI-100-B-small.png';

const DiciplineInterface = () => (
    <Container fluid>
        <Row>
            <p>
                Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
  </p>
        </Row>
        <Row>
            <Col md="6">
                <ChartImage src={chartA}
                    alt="Discipline Interface Chart A"
                    title="Discipline Interface Chart A"
                    subtitle="DCI-100-A" />
            </Col>
            <Col md="6">
                <ChartImage src={chartB}
                    alt="Discipline Interface Chart B"
                    title="Discipline Interface Chart B"
                    subtitle="DCI-100-B" />
            </Col>
        </Row>
        <Row className="button-container">        
        <button className="btn btn-lg btn-outline-primary"> Request Download</button>       
            
        </Row>
    </Container>
);

export default DiciplineInterface;