let initialState = localStorage['categories'] ? JSON.parse(localStorage['categories']) : [];
export default (state=initialState, action) => {
  let { type, payload } = action;

  // sgc - Validate correct information was provided
  if (type.startsWith('CATEGORY')) {
    if (payload && !payload.name) throw new Error('no name specified for category');
    if (payload && !payload.budget) throw new Error('no budget specified for category');
  }

  switch (type) {
  case 'CATEGORY_CREATE': return [ ...state, payload ];
  case 'CATEGORY_UPDATE': return state.map(cat => cat._id === payload._id ? payload : cat);
  case 'CATEGORY_DELETE': return state.filter(cat => cat._id !== payload._id);
  case 'CATEGORY_RESET': return [];
  default: return state;
  }
};
