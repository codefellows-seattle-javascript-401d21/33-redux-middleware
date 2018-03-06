import {checker} from '../lib/payload-checker';

export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE': 
    checker(payload);
    return [...state, payload];

  case 'CATEGORY_UPDATE': 
    checker(payload);
    return state.map(cat => cat._id === payload._id ? payload : cat);

  case 'CATEGORY_DELETE': 
    checker(payload);
    return state.filter(cat => cat._id !== payload._id);

  case 'CATEGORY_RESET': 
    checker(payload);
    return [];

  default: return state;
  }
};