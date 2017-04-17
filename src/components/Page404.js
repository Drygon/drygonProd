import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const Page404 = () => (
  <Container fluid>
    <h1>Page not found Error 404</h1>    
    <p>The page you requested could not be found. Use your browsers BAck button to go back to the page you have previously come from . Or you could press the button below</p>
    <br />
    <Button outline color="primary">
    <span className="fa fa-home"></span>
    <Link to="/">Home</Link>
    </Button>
  </Container>
);

export default Page404;