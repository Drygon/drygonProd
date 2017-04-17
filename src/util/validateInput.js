import validator from 'validator';
import isEmpty from 'lodash.isempty';

export const validateInput = (data) => {
  let errors = {};

  if (data.name.trim().length === 0) {
    errors.name = 'The name field is required';
    errors.inputState = 'warning';    
  }

  if (data.email.trim().length === 0) {
    errors.email = 'The email field is required';
    errors.inputState = 'warning';  
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
    errors.inputState = 'warning';     
  }

  if (data.message.trim().length === 0) {
    errors.message = 'The message field is required';
    errors.inputState = 'warning';    
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}