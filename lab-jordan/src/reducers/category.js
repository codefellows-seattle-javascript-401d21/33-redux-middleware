let initialState = localStorage['categories']
  ? JSON.parse(localStorage['categories'])
  : [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  if(type.startsWith('CATEGORY')){
    if(!payload.title) throw new Error('Category missing title');
    if(!payload.budget) throw new Error('Category missing budget');
  }

  switch(type) {

  case 'CATEGORY_CREATE': return [...state, payload];

  case 'CATEGORY_UPDATE': return state.map(
    cat => cat._id === payload._id ? payload : cat
  );

  case 'CATEGORY_DELETE': return state.filter(cat => cat._id !== payload._id);

  case 'CATEGORY_RESET': return [];

  default: return state;
  }
};
