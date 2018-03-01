let initialState = localStorage['expenses'] ? JSON.parse(localStorage['expenses']) : {};
export default (state=initialState, action) => {
  let { type, payload } = action;

  // sgc - Validate correct information was provided
  if (payload && type.startsWith('CATEGORY')) {
    if (!payload.name) throw new Error('no name specified for category');
    if (!payload.budget) throw new Error('no budget specified for category');
  } else if (payload && type.startsWith('EXPENSE')) {
    if (!payload.name) throw new Error('no name specified for expense');
    if (!payload.cost) throw new Error('no cost specified for expense');
  }

  switch (type) {
  case 'CATEGORY_CREATE':
    return { ...state, [payload._id]: [] };
  case 'CATEGORY_DELETE': {
    let newstate = { ...state };
    delete newstate[payload._id];
    return newstate;
  }
  case 'EXPENSE_CREATE': {
    let newstate = { ...state };
    newstate[payload.categoryId].push(payload);
    return newstate;
  }
  case 'EXPENSE_UPDATE': {
    let newstate = { ...state };
    newstate[payload.categoryId] = newstate[payload.categoryId].map(
      exp => (exp._id === payload._id ? payload : exp)
    );
    return newstate;
  }
  case 'EXPENSE_DELETE': {
    let newstate = { ...state };
    newstate[payload.categoryId] = newstate[payload.categoryId].filter(
      exp => exp._id !== payload._id
    );
    return newstate;
  }
  case 'EXPENSE_RESET': {
    let newstate = { ...state };
    newstate[payload.categoryId] = [];
    return newstate;
  }
  default:
    return state;
  }
};
