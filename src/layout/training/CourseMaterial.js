import React from 'react';
import { coursematerials } from './coursematerials';

const MaterialHeader = () => (
  <div className="row">
    <h4 className="blog-subtitle">Course Materials</h4>   
      <p>
        The following course materials will be provided as part of the training program. Specific documents will be make available to the public when the link is high-lighted to show its availability for downloading.  If you are interested in receiving the contents of the course manual without taking the training session, please contact Drygon Consulting Inc. directly for pricing. 
      </p>
  </div>
);

const MaterialDetail = (props) => {
    const materials = props.coursematerials;
    
    const listsubjects = materials.map(
        (material) => {
            return (
        <ul key={material.item}>
        <span>{material.subject}</span>
        {material.text.map((items) => (
            <li key={items.item}>{items.description}</li>
        ))}
        </ul>

            )
        })
    return (
        <ul>
        {listsubjects}
        </ul>
    )
}

const CourseMaterial = () => (
    <div className="container">
    <MaterialHeader />
    <MaterialDetail coursematerials={coursematerials}/>   
  </div>
);

export default CourseMaterial;