import React from 'react';
import { Container } from 'reactstrap';
import { DrygonConsulting, Footer } from '../components';

const AboutUsPage = () => (
    <Container fluid className="content-wrapper">
        <div className="content">
            <DrygonConsulting />
        </div>
        <Footer />
    </Container>

);

export default AboutUsPage;