export default (state = {}, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE':
    if(payload.title === state.title) return new Error('That expense already exists');
    if (payload.title === '' || payload.budget === '') {
      throw new Error('Please fill out the entire form');
    }
    return {...state, [payload._id]: []};
  case 'CATEGORY_DELETE':
  { let changedState = {...state};
    if(!changedState[payload._id]) throw new Error('Something went wrong');
    delete changedState[payload._id];
    return changedState;
  }
  case 'EXPENSE_CREATE' : {
    if (payload.title === '' || payload.price === '') {
      throw new Error('Please fill out the entire form');
    }
    if (!state._id) throw new Error('Something went wrong');
    let categoryId = payload.categoryId;
    let expenses = state[categoryId];
    let changedExpenses = [...expenses, payload];
    return {...state, [categoryId]: changedExpenses};
  }
  case 'EXPENSE_UPDATE' : {
    if(!state._id) throw new Error ('Somthing went wrong');
    let categoryId = payload.categoryId;
    let changedState = {...state};
    changedState[categoryId] = state[categoryId].map(expense => expense._id === payload._id ? payload : expense);
    return changedState;
  }
  case 'EXPENSE_DELETE' : {
    if(!state._id) throw new Error ('Nothing to delete');
    let categoryId = payload.categoryId;
    let changedState = {...state};
    changedState[categoryId] = state[categoryId].filter(expense => expense._id !== payload._id);
    return changedState;
  }
  case 'EXPENSE_RESET' : return {};
  default: return state;
  }
};