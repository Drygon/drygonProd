import React from 'react';
import { DrawingSnap, Jumbo,  PhotoSnap, QuotationSnap } from './home';
import Footer from './Footer';

const Home = () => (
  <div className="container" id="homepage">
    <Jumbo />
     <div className="container-fluid" id="home-body">
    <div className="col">
     <div className="container-fluid">
          <QuotationSnap />     
     </div>
     <div className="row justify-content-center"></div>
      <div className="card-deck">       
          <PhotoSnap />
          <DrawingSnap />
      </div>
    </div>    
    </div>
    <Footer />
  </div>
);

export default Home;