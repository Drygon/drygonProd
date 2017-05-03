import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => (
  <div className="drygoncontainer" id="page404">
    <h1>Page not found Error 404</h1>    
    <p>The page you requested could not be found. Use your browsers BAck button to go back to the page you have previously come from . Or you could press the button below</p>
    <br />
    <button type="button" className="btn btn-outline-warning btn-lg">
    <Link to="/"><span className="fa fa-home">Home</span></Link>
    </button>
  </div>
);

export default Page404;