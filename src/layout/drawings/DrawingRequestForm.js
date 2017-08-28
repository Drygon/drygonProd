import React, { Component } from "react";
import { Field, reduxForm, SubmissionError, initialize } from "redux-form";
import { database } from "../../database/database";
import { renderInputField, renderTextAreaField,renderCheckField, RenderAlert } from '../component/formFields';
import { validate, warn } from '../../util/validate';
import { normalizePhone } from '../../util/normalizePhone';

const DrawingRequestTerms = () => (
  <div>
    <h1 className="blog-title text-center">Request for PDF drawing files</h1>               
              <ul>
                <li style={{fontWeight:"bold"}}>
                  DWG. DCI-100-A: {'\u00A0'} Discipline Interface Chart during design basis memorandum (DBM) phase
                  {" "}
                </li>
                <li style={{fontWeight:"bold"}}>
                  DWG. DCI-100-B: {'\u00A0'}Discipline Interface Chart during EDS & Detailed engineering phase
                  {" "}
                </li>
              </ul>
              <div id="terms" className="card card-outline-danger">
              <div className="card-block">              
                <strong style={{textDecoration:"underline"}}> " Copyright Disclosure and Agreement " </strong>
                <p style={{fontWeight:"bold"}}>
                  The contents and format of these drawings have been developed and designed by Tony Yep and they remain the exclusive property of Drygon Consulting Inc. {'\u00A0'} No changes can be made to any parts of these drawings without the written approval of Tony Yep. These drawings are issued for public information and individual personal use only, and they are not to be reproduced or distributed to others for any other purpose.
                </p>
              </div>
              </div>
  </div>
);

class DrawingRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agree: " ",
      firstname: " ", 
      lastname: "",
      email: " ",
      street: "",
      city: "",
      province: "",
      country: "",
      post: "",
      phone:"",
      message: " "
    };
  }
componentDidMount() {
  this.handleInitialize();
}

handleInitialize() {
  initialize(this.state);
}
  
  render() {
    const { handleSubmit, pristine, reset, submitting, submitSucceeded } = this.props;

    const submit = (values) => {
      const { reset } = this.props;
      let timeStamp = new Date();
     let transmittal = {
        lastname: values.lastname,
        firstname:values.firstname,
        email: values.email,
        street: values.street || '',
        city: values.city,
        province: values.province || '',
        country: values.country,
        post: values.post || '',
        phone: values.phone || '',        
        message: values.message,
        agree: values.agree,
        timeStamp: timeStamp.toString()
      };

      const ref = database.ref().child("transmittals/");
      ref.push(transmittal).catch(error => {
        console.log(error);
        throw new SubmissionError("Deliver failed!");
      }).then(() => {
          setTimeout(function() {
                reset()
              }, 1000);
      });
      database.ref().off();
    }

    return (
      <div className="container" id="transmittal">          
            <DrawingRequestTerms  />          
            <form onSubmit={handleSubmit(submit)}>
            <fieldset>            
                  <Field
            name="agree"
            type="checkbox"
            component={renderCheckField}
            label="I Agree"
          />
          <div className="row">
          <div className="col col-md-6">          
           <Field
        name="lastname"
        type="text"
        component={renderInputField}
        label="Last Name"
      />      
      </div>
       <div className="col col-md-6">  
<Field    
        name="firstname"
        type="text"
        component={renderInputField}
        label="First Name"
      />
          </div>
            </div>
      <div className="row">
        <div className="col col-md-6">
        <Field
        name="email"
        type="email"
        component={renderInputField}
        label="Email"
      />
        </div>
            <div className="col col-md-6">
         <Field
        name="phone"
        type="text"
        component={renderInputField}
        label="Phone (Optional)"
        normalize={normalizePhone}
      />
        </div>
      </div>
      

      <div className="row">
      <div className="col col-md-6">
      <Field
        name="street"
        type="text"
        component={renderInputField}
        label="Street"
      />
      </div>
       <div className="col col-md-6">
      <Field
        name="city"
        type="text"
        component={renderInputField}
        label="City"
      />
      </div>
      </div>
       <div className="row">
      <div className="col col-md-4">
<Field
        name="province"
        type="text"
        component={renderInputField}
        label="Province"
      />
      </div>
       <div className="col col-md-4">
 <Field
        name="country"
        type="text"
        component={renderInputField}
        label="Country"
      />  
      </div>
      <div className="col col-md-4">
<Field
        name="post"
        type="text"
        component={renderInputField}
        label="Postal Code"
      />
      </div>
      </div>       
      
     <Field
        name="message"
        type="textarea"
        component={renderTextAreaField}
        label="Why do you want these drawings ? "
      />
      <div className="text-center">
        <button
          className="btn btn-sm btn-outline-primary"
          type="submit"
          disabled={submitting}
        >
          Submit
        </button>
        <button
          className="btn btn-sm btn-outline-primary"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button>
      </div>
      {submitSucceeded ? <RenderAlert message="Transmittal submitted" /> : null }
      </fieldset>
    </form>
        </div>
    );
  }
}

export default reduxForm({
  form: "drawingrequest",
  validate,
  warn
})(DrawingRequestForm);

