import validator from 'validator';
import isEmpty from 'lodash.isempty';

export const validateInput = (data) => {
  let errors = {};

  if (data.lastname.trim().length === 0 || undefined) {
    errors.lastname = 'The last name field is required';
    errors.inputState = 'warning';    
  }
  
  if (data.firstname.trim().length === 0 || undefined) {
    errors.firstname = 'The first name field is required';
    errors.inputState = 'warning';    
  }

  if (data.name.trim().length === 0 || undefined) {
    errors.name = 'The name field is required';
    errors.inputState = 'warning';    
  }

  if (data.email.trim().length === 0 || undefined) {
    errors.email = 'The email field is required';
    errors.inputState = 'warning';  
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
    errors.inputState = 'warning';     
  }

  if (data.street.trim().length === 0 || undefined) {
    errors.street = 'The street field is required';
    errors.inputState = 'warning';    
  }

  if (data.city.trim().length === 0 || undefined) {
    errors.city = 'The city field is required';
    errors.inputState = 'warning';    
  }

  if (data.province.trim().length === 0 || undefined) {
    errors.province = 'The province field is required';
    errors.inputState = 'warning';    
  }
  
  if (data.country.trim().length === 0 || undefined) {
    errors.country = 'The country field is required';
    errors.inputState = 'warning';    
  }

  if (data.post.trim().length === 0 || undefined) {
    errors.post = 'The post field is required';
    errors.inputState = 'warning';    
  }

  if (data.phone.trim().length === 0 || undefined) {
    errors.phone = 'The phone field is required';
    errors.inputState = 'warning';    
  }

  if (data.message.trim().length === 0 || undefined) {
    errors.message = 'The message field is required';
    errors.inputState = 'warning';    
  }



  return {
    errors,
    isValid: isEmpty(errors)
  }
}