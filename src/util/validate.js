export const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "The name field is required!";
  }

  if (!values.email) {
    errors.email = "The email field is required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter valid email address!";
  }

  if (!values.message) {
    errors.message = "The message field is required!";
  }

  if (!values.firstname) {
    errors.firstname = "Please fill in your First Name!";
  }

   if (!values.lastname) {
    errors.lastname = "Please fill in your Last Name!";
  }

  if (!values.city) {
    errors.city = "The city field is required!";
  } 

  if (!values.country ) {
    errors.country = "The Country field is required!";
  }
  if (!values.agree) {
    errors.agree = "Please accept the terms and conditions!"
  }
  return errors;
};

export const warn = values => {
  const warnings = {};

  if (!values.message || values.message.trim().length < 10) {
    warnings.message = "Your message is too short ...";
  }

  return warnings;
};