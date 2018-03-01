export default (state=[], action) => {
  let {type, payload} = action;
  // if(payload.price === '') throw new Error('Price can not be empty');
  // if(payload.title === '') throw new Error('Category can not be empty');
  switch(type) {
  case 'CATEGORY_CREATE': 
    if(payload.name === '') throw new Error('Name can not be empty');
    if(payload.budget === '') throw new Error('Budget can not be empty');
    return [...state, payload];
  case 'CATEGORY_UPDATE': return state.map(cat => cat._id === payload._id ? payload : cat);
  case 'CATEGORY_DESTROY': return state.filter(cat => cat._id !== payload._id);
  case 'CATEGORY_RESET': return [];
  default: return state;
  }
};