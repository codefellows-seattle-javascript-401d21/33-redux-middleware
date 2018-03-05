import {validate} from '../lib/utils.js';

export default (state=[], action) => {
  let {type, payload} = action;

  const takeAction = {}; 
  takeAction['CATEGORY_CREATE'] = category => {
    if(!validate(category)) return state;
    return [...state, category];
  };

  takeAction['CATEGORY_UPDATE'] = category => {
    if(!validate(category)) return state;
    return [...state].map(cat => cat.id === category.id ? category : cat);
  };

  takeAction['CATEGORY_DELETE'] = id => {
    if(!id) return state;
    return [...state].filter(cat=> cat.id !== id);
  };

  takeAction['CATEGORY_RESET'] = () => [];
  
  return takeAction[type] ? takeAction[type](payload) : state;
};