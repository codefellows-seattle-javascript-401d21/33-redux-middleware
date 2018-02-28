export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE': 
    if(payload.title === state.title) return new Error('This category already exists');
    if(payload.title === '' || payload.budget === '') throw new Error('Please fill out the entire form');
    return [...state, payload];
  case 'CATEGORY_UPDATE': 
    if(payload.title === '' && payload.budget === '') throw new Error('Please fill out what you would like to update');
    return state.map(category => category._id === payload._id ? payload : category);
  case 'CATEGORY_DELETE': 
    if(!state._id) throw new Error('Nothing to delete');
    return state.filter(category => category._id !== payload._id);
  case 'CATEGORY_RESET': return [];
  default: return state;
  }
};