import React from 'react';
const services = [
    {title: "Engineering Management",
    content:"Drygon Consulting Inc. has available senior professional engineers available in every discipline to audit  your engineering work, or to provide guidance, technical support and mentorship to your engineering team.   If interested, please contact Drygon Consulting Inc. directly to discuss your needs."},
    {title:"Project Management",
    content:"Drygon Consulting Inc. has available senior professionals experienced in Project Management and Project Controls.  Those individuals can provide audit services, technical support, advice and mentorship to your project management team to achieve better project execution and results.  If interested, please contact Drygon Consulting Inc. directly to discuss your needs."}
]

const ServiceCard = (service) => (
    
    <div className="card card-outline-secondary mb-3">
      <div className="card-block">
        <h4 className="card-header text-center">{service.title}</h4>
        <p className="card-text mt-3">{service.content}</p>       
      </div>
    </div> 

);

const ServiceBody = () => (

<div className="card-group">
{services.map((service,i) => (
  <ServiceCard {...service} key={i} />
))}
</div>

);

export default ServiceBody;