import React from 'react';
import classnames from 'classnames';

export const renderInputField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div
    className={classnames("form-group", {
      "has-success": touched && !error,
      "has-danger": touched && error,
      "has-warning": touched && warning
    })}
  >
    <label>{label}:</label>
    <div>
      <input
        className="form-control"
        {...input}
        placeholder={label}
        type={type}
      />
      {touched &&
        (error && <span className="form-control-feedback">{error}</span>)}
    </div>
  </div>
);

export const renderTextAreaField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div
    className={classnames("form-group", {
      "has-success": touched && !error,
      "has-danger": touched && error,
      "has-warning": touched && warning
    })}
  >
    <label>{label}:</label>
    <div>
      <textarea
        className="form-control"
        {...input}
        placeholder={label}
        type={type}
        rows="8"
      />
      {touched &&
        ((error && <span className="form-control-feedback">{error}</span>) ||
          (warning &&
            <span className="form-control-feedback">{warning}</span>))}
    </div>
  </div>
);

export const renderCheckField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div
    className={classnames("form-check", {
      "has-success": touched && !error,
      "has-danger": touched && error,
      "has-warning": touched && warning
    })}
  >
    <label className="form-check-label">{label}:</label>
     <input
        className="form-check-input"
        {...input}       
        type={type}      
      />
      {touched &&
        ((error && <span className="form-control-feedback">{error}</span>) ||
          (warning &&
            <span className="form-control-feedback">{warning}</span>))}
   
  </div>

);

export const RenderAlert = ({message}) => { 
  return (
        <div className="alert alert-dismissible alert-success" >   
            <strong>Success!</strong>{message}.
        </div>
) 
}