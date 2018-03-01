let initialState = localStorage['expenses'] ? JSON.parse(localStorage['expenses']) : {};


export default (state=initialState, action) => {
  let {type, payload} = action;

  if(type.startsWith('CATEGORY')){
    if(!payload.title) throw new Error('Category missing title');
    if(!payload.budget) throw new Error('Category missing budget');
  } else if (type.startsWith('EXPENSE')) {
    if(!payload.name) throw new Error('Category missing name');
    if(!payload.price) throw new Error('Category missing price');
    if(!payload.catId) throw new Error('Category missing category ID');
  }
  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload._id]: []};
  case 'CATEGORY_DELETE':
    let changedState = {...state};
    delete changedState[payload._id];
    return changedState;
  case 'EXPENSE_CREATE': return {...state, [payload.catId]: [...state[payload.catId], payload]};
  case 'EXPENSE_UPDATE': {
    let changedState = {...state};
    let changedExpense = state[payload.catId].map(expense => expense._id === payload._id ? payload : expense);
    changedState[payload.catId] = changedExpense;
    return changedState;
  }
  case 'EXPENSE_DELETE': {
    let changedState = { ...state };
    let changedExpense = state[payload.catId].filter(expense => expense._id !== payload._id);
    changedState[payload.catId] = changedExpense;
    return changedState;
  }
  case 'EXPENSE_RESET': return initialState;
  default: return state;
  }
};
