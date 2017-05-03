import React, { Component } from "react";
import { Field, reduxForm, SubmissionError, initialize } from "redux-form";
import { database } from "../../database/database";
import { validate, warn } from '../../util/validate';
import { renderInputField, renderTextAreaField, RenderAlert } from '../component/formFields';


class ContactUsForm extends Component {
 
constructor(props) {
  super(props)
  this.state = {
    "name":" ",
    "email": " ",
    "message": " "
  }
  
}
componentDidMount() {
  this.handleInitialize();
}

handleInitialize() {  
  initialize(this.state);
}

 render() {

 const { handleSubmit, pristine, reset, submitting, submitSucceeded } = this.props;
const submit = (values) =>{
  const { reset } = this.props;
  let timeStamp = new Date();
  let message = {
    sender: values.name,
    email: values.email,
    message: values.message,
    timeStamp: timeStamp.toString()
  };

  const ref = database.ref().child("messages/");
  ref.push(message).catch(error => {
    console.log(error);
    throw new SubmissionError("Deliver failed!");
  }).then(() => {
    setTimeout(function() {
      reset()
    }, 1000);
  })

  database.ref().off();

}

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="container">
      <Field
        name="name"
        type="text"
        component={renderInputField}
        label="Name"
      />    
      
      <Field
        name="email"
        type="email"
        component={renderInputField}
        label="Email"
      />
      
      <Field
        name="message"
        type="textarea"
        component={renderTextAreaField}
        label="Message"
      />
    
      <div className="text-center">
        <button
          className="btn btn-lg btn-outline-primary"
          type="submit"
          disabled={submitting}
        >
          Submit
        </button>
        <button
          className="btn btn-lg btn-outline-primary"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button>
      </div>
      {submitSucceeded ? <RenderAlert message="Message sent"/> : null }
      </div>
    </form>
  );
 }

};

export default reduxForm({
  form: "contactus",
  validate,
  warn
})(ContactUsForm);
