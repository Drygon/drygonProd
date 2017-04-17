import React from 'react';
import { Container } from 'reactstrap';
import { Chart, Footer } from '../components';

const DrawingsPage = () => (

    <Container fluid className="content-wrapper">
        <div className="content">
            <h1>Dicipline Interface Chart</h1>
            <Chart />
        </div>
        <Footer />
    </Container>
);

export default DrawingsPage;