import React from "react";
import { TrainingHeader, CourseOverview, CourseMaterial } from "./training";
import Footer from "./Footer";

const TrainingNav = () => (
  <div className="content-wrapper" id="subnav">
    <ul className="nav nav-tabs nav-fill" role="tablist">
      <li className="nav-item">
        <a
          className="nav-link btn btn-outline-secondary"
          href="#course"
          data-toggle="tab"
        >
          Course Overview
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link btn btn-outline-secondary"
          href="#material"
          data-toggle="tab"
        >
          Course Materials
        </a>
      </li>
    </ul>
  </div>
);
const Training = () => (
  <div className="drygoncontainer">
    <div className="container" id="training">
      <TrainingHeader />
      <TrainingNav />     
        <div className="row">
          <div className="container tab-content">
            <div className="tab-pane active" id="course" role="tabpanel">
              <CourseOverview />
            </div>
            <div className="tab-pane" id="material" role="tabpanel">
              <CourseMaterial />
            </div>
          </div>   
      </div>
    </div>
    <Footer />
  </div>
);

export default Training;
