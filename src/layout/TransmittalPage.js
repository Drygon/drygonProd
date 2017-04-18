import React from 'react';
import { Container } from 'reactstrap';
import { DrawingRequestForm, Footer } from '../components';

const TransmittalPage = () => (
    <Container fluid className="content-wrapper">
        <div className="content">
        <DrawingRequestForm />        
        </div>
        <Footer />
    </Container>
);

export default TransmittalPage;