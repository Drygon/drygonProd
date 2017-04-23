import React from 'react';
import { Container } from 'reactstrap';
import { DiciplineInterface , Footer } from '../components';

const DrawingsPage = () => (

    <Container className="content-wrapper" fluid>
        <div className="content">
            <h1>Dicipline Interface Charts</h1>
            <DiciplineInterface />
        </div>
        <Footer />     
    </Container>
);

export default DrawingsPage;