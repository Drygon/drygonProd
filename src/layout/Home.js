import React from 'react';
import { DrawingSnap, HomeWord,Jumbo,  PhotoSnap, QuotationSnap } from './home';
import Footer from './Footer';

const Home = () => (
  <div id="homepage">
    <Jumbo />  
    <HomeWord />      
     <div className="content-wrapper" id="home-body">
    <div className="col">
     <div className="row justify-content-center"></div>
      <div className="card-deck">       
          <DrawingSnap />
          <PhotoSnap />
      </div>
     <div className="container-fluid">
          <QuotationSnap />     
     </div>
    </div>    
    </div>
    <Footer />
  </div>
);

export default Home;