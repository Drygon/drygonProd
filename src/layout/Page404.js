import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => (
  <div className="container">
    <h1>Page not found Error 404</h1>    
    <p>The page you requested could not be found. Use your browsers BAck button to go back to the page you have previously come from . Or you could press the button below</p>
    <br />
    <button type="button" className="btn btn-outline-primary">
    <Link to="/"><span className="fa fa-home">Home</span></Link>
    </button>
  </div>
);

export default Page404;