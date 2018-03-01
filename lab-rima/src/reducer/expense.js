export default (state={}, action) => {
  let {type, payload} = action;

  switch(type){
  case 'CATEGORY_CREATE': {
    if(!payload.id || payload.id.trim().length === 0){
      throw new Error('EXPENSE REDUCER: Category ID must be present.');
    }
    if(payload.name.trim().length === 0 || payload.budget < 0){
      throw new Error('EXPENSE REDUCER: Category name cannot be empty or/and budget cannot be negative.');
    }
    return {...state, [payload.id]: []};
  }
  case 'CATEGORY_DELETE': {
    if(!payload.id || payload.id.trim().length === 0){
      throw new Error('EXPENSE REDUCER: Category ID must be present.');
    }
    let catDeletedState = {...state};
    delete catDeletedState[payload.id];
    return catDeletedState;
  }
  case 'EXPENSE_CREATE': {
    if(!payload.id || payload.id.trim().length === 0){
      throw new Error('EXPENSE REDUCER: Expense ID must be present.');
    }
    if(!payload.categoryId || payload.categoryId.trim().length === 0){
      throw new Error('EXPENSE REDUCER: Expense categoryID must be present.');
    }
    if(payload.name.trim().length === 0 || payload.price < 0){
      throw new Error('EXPENSE REDUCER: Expense name cannot be empty or/and price cannot be negative.');
    }
    let expCreatedState = {...state};
    expCreatedState[payload.categoryId].push(payload);
    return expCreatedState;
  }
  case 'EXPENSE_UPDATE': {
    if(!payload.id || payload.id.trim().length === 0){
      throw new Error('EXPENSE REDUCER: Expense ID must be present.');
    }
    if(!payload.categoryId || payload.categoryId.trim().length === 0){
      throw new Error('EXPENSE REDUCER: Expense categoryID must be present.');
    }
    if(payload.name.trim().length === 0 || payload.price < 0){
      throw new Error('EXPENSE REDUCER: Expense name cannot be empty or/and price cannot be negative.');
    }
    let expUpdatedState = {...state};
    expUpdatedState[payload.categoryId] = state[payload.categoryId].map(expense => expense.id === payload.id ? payload : expense);
    return expUpdatedState;
  }
  case 'EXPENSE_DELETE': {
    if(!payload.id || payload.id.trim().length === 0){
      throw new Error('EXPENSE REDUCER: Expense ID must be present.');
    }
    if(!payload.categoryId || payload.categoryId.trim().length === 0){
      throw new Error('EXPENSE REDUCER: Expense categoryID must be present.');
    }
    if(payload.name.trim().length === 0 || payload.price < 0){
      throw new Error('EXPENSE REDUCER: Expense name cannot be empty or/and price cannot be negative.');
    }
    let expDeletedState = {...state};
    expDeletedState[payload.categoryId] = state[payload.categoryId].filter(expense => expense.id !== payload.id);
    return expDeletedState;
  }
  default:
    return state;
  }
};
