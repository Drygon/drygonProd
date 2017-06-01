import React from 'react';

const Welcome = () => (
  <div className="container-fluid" id="welcome">
    <h4 className="blog-subtitle text-center">Welcome</h4>    
    <div className="row">
    <div className="blog-post">
      <p>Dear Reader,</p>
      <p>
        Thanks for visiting my website. {'\u00A0'} There is a quotation which is the basis for why I started this
        {'\u00A0'}
        <a href="http://drygon.ca" target="_blank"> Drygon </a>
        {'\u00A0'}
        website:
        {'\u00A0'}
        <q>If you have knowledge, let others light their candles by it.</q>
        {'\u00A0'}
        {'\u00A0'}I have reached a phase in my life where I choose to share my knowledge and experience for others to benefit from.
      </p>
      <p>
        So if you find some information on my website which may have helped make you better person - technically, or as a leader and project manager, or to even better understand life’s philosophies, then I would have achieved this purpose.
        {'\u00A0'}
      </p>
      <p>
        And if you actually got value and personally benefitted from my website, then please consider making a donation to the link below to
       {'\u00A0'}
        <a href="https://www.patreon.com/drygoninc" target="_blank">
          Patreon Account
        </a>
     {'\u00A0'}
        to help fund and sustain this website so that it can continue to be available for others to benefit.
      </p>
        <br />
      <p>
        Sincerely,
      </p>
      <p id="signature">Tony Yep</p>
      <p>Drygon Consulting Inc.</p>
    </div>       
    </div>
    </div>
);

export default Welcome;