export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE': 
    if(payload.title === '') {
      throw new Error('Category can not be empty');
    } else if (payload.budget < 0 ) {
      throw new Error('Budget cannot be less than 0');
    }
    return [...state, payload];
  case 'CATEGORY_UPDATE': 
    if(payload.title === '') {
      throw new Error('Category can not be empty');
    } else if (payload.budget < 0 ) {
      throw new Error('Budget cannot be less than 0');
    }
    return state.map(cat => cat._id === payload._id ? payload : cat);
  case 'CATEGORY_DELETE': return state.filter(cat => cat._id !== payload._id);
  case 'CATEGORY_RESET': return [];
  default: return state;
  }
};
