import React from 'react';
import { Container } from 'reactstrap';
import { Page404, Footer } from '../components';

const Page404Page = () => (
    <Container fluid className="content-wrapper">
        <section id="page404" className="content">
            <Page404 />
        </section>
        <Footer />
    </Container>

);

export default Page404Page;