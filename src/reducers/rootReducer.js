import { combineReducers } from 'redux';
import quotationReducer from './quotationReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  quote: quotationReducer,
  form: formReducer
});