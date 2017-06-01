import React from "react";
import DOMPurify from "dompurify";
import { courseobj, coursefor, instructor, schedule1, schedule2 } from "./coursecontent";

const OverviewHeader = () => (
  <div className="row">
    <h4 className="blog-subtitle">Course Overview</h4>   
      <p>
        To achieve the full benefit from these Discipline Interface Charts, a One-Day Training session will be available through APEGA or an after-degree program at the universities.  {'\u00A0'} In-house facilitation and presentation of this training program by Drygon Consulting Inc. is also available to companies. {'\u00A0'} If you are interested, please contact Drygon Consulting Inc. directly for pricing and availability and to discuss any customization per your needs.
      </p>
      <p>The training program will be as follows:</p>    
  </div>
);

const CourseObj = () => (
  <div id="courseobj">
    <ul className="checkmark">
      <span>Course Objectives</span>
      {courseobj.map((t, i) => <li className="tick" key={i}>
      {t.text}
      </li>)}
    </ul>
  </div>
);

const CourseFor = () => (
  <div id="coursefor">
    <ul>
      <span>Who Should Attend This Course?</span>
      {coursefor.map((t, i) => <li key={i}><div>{t.text}</div></li>)}
    </ul>
  </div>
);

const Instructor = () => (
  <div id="instructor">
    <ul>
      <span>Instructor’s Biography</span>
      {instructor.map((t, i) => (
        <li key={i}>
          <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(t.text, {ALLOWED_TAGS: ["strong", "a"]})}} />
        </li>
      ))}
    </ul>
  </div>
);

const CourseSchedule = () => ( 
    <div>
     <h6><i className="fa fa-clock-o" />Morning: 8 AM to Noon</h6>
     <ul>
    {schedule1.map((t,i) => (
       <li key={i}>{t.text}</li>
    ))}     
     </ul>
    
    <h6><i className="fa fa-clock-o" /> Lunch:  One Hour</h6>
   
    <h6><i className="fa fa-clock-o" />
     Afternoon:  1 – 5 PM </h6>
     <ul>
    {schedule2.map((t,i) => (
       <li key={i}> {t.text}</li>
    ))
    }      
     </ul>
   
    </div> 
   
 );

const CourseDetail = () => (
    <div className="blog-post">
    <h4>Course Title:<span>Discipline Interface Charts</span></h4>
    <br />
    <h6>
      <i className="fa fa-clock-o" />
      <span>Duration: One Day Session - 8 Hours</span>
    </h6>
    <CourseObj />
    <CourseFor />
    <Instructor />    
    <div id="agenda">
    <h4>Course Agenda</h4>
     <CourseSchedule />       
    </div>
    </div>
);

const CourseOverview = () => (
  <div className="container">
    <OverviewHeader />
    <CourseDetail />   
  </div>
);

export default CourseOverview;
