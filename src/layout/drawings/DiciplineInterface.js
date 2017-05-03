import React from 'react';
import { Link } from 'react-router-dom';
import ChartImage from './ChartImage';
import chartA from '../../images/DCI-100-A-small.png';
import chartB from '../../images/DCI-100-B-small.png';

const DiciplineInterface = () => (
    <div className="container" id="drawings">
    <h1>Overview</h1>
        <div className="row">
            <p>The development of the Discipline Interface Charts first started in 1992 when engineering companies became interested in documenting the best work flow process related to the way engineering works were to be conducted in an<strong> Engineering-Procurement-Construction (EPC) </strong> environment.  Through 20 years of evolvement and actual use on real projects, these drawings have proven to be the most detailed and comprehensive summary on project execution ever developed.  These drawings incorporate the timely application of value added elements, optimized work flow sequence and the interfaces needed between the engineering disciplines, client and project management teams, project controls, procurement and construction to minimize rework arising from out-of-sequence work.  The basic concepts on project execution shown on these drawings are still as valid today as they were 25 years ago.  The fundamentals do not change.  There are no other equivalent drawings which are so detailed and technically correct in their logical progression of the tasks and deliverables required.</p>
<div className="row">
<div className="col cl-md-6">
                <ChartImage src={chartA}
                    alt="Discipline Interface Chart A"
                    title="Discipline Interface Chart A"
                    subtitle="DCI-100-A" />
            </div>
            <div className="col cl-md-6">
                <ChartImage src={chartB}
                    alt="Discipline Interface Chart B"
                    title="Discipline Interface Chart B"
                    subtitle="DCI-100-B" />
            </div>
</div>
            <p>These drawings are available to you at no cost, in pdf format, for your own personal use and files. To receive them, please fill out the Request Form by acknowledging the copyright requirements and stating why you want these drawings.  Once accepted, you will be sent the pdf drawing files via return email.</p>
        <Link className="btn btn-lg btn-block btn-outline-primary" to="/drawingrequestform"> Request Download<i className="fa fa-download"></i></Link>
            
        </div>
        </div>      
       
);

export default DiciplineInterface;