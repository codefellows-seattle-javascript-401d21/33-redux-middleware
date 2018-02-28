export default (state={}, action) => {
  let {type, payload} = action;

  switch(type){
  case 'CATEGORY_CREATE': {
    return {...state, [payload.id]: []};
  }
  case 'CATEGORY_DELETE': {
    let catDeletedState = {...state};
    delete catDeletedState[payload.id];
    return catDeletedState;
  }
  case 'EXPENSE_CREATE': {
    let expCreatedState = {...state};
    expCreatedState[payload.categoryId].push(payload);
    return expCreatedState;
  }
  case 'EXPENSE_UPDATE': {
    let expUpdatedState = {...state};
    expUpdatedState[payload.categoryId] = state[payload.categoryId].map(expense => expense.id === payload.id ? payload : expense);
    return expUpdatedState;
  }
  case 'EXPENSE_DELETE': {
    let expDeletedState = {...state};
    expDeletedState[payload.categoryId] = state[payload.categoryId].filter(expense => expense.id !== payload.id);
    return expDeletedState;
  }
  default:
    return state;
  }
};
