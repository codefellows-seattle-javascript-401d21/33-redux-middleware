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
    // if(!changedState[payload._id]) throw new Error('Something went wrong');
    delete changedState[payload._id];
    return changedState;
  }
  case 'EXPENSE_CREATE' : {
    if (payload.title === '' || payload.price === '') {
      throw new Error('Please fill out the entire form');
    }
    if (!payload.categoryId) throw new Error('Something went wrong');
    let categoryId = payload.categoryId;
    let expenses = state[categoryId];
    let changedState = [...expenses, payload];
    return {...state, [categoryId]: changedState};
  }
  case 'EXPENSE_UPDATE': {
    console.log(payload);
    let categoryId = payload.categoryId;
    let expenses = state[categoryId];
    console.log(state);
    let changedState = expenses.map(expense => expense._id === payload._id ? payload : expense);
    return {...state, [categoryId] : changedState};
  }
  case 'EXPENSE_DELETE' : {
    let categoryId = payload.categoryId;
    let changedState = {...state};
    changedState[categoryId] = state[categoryId].filter(expense => expense._id !== payload._id);
    return changedState;
  }
  case 'EXPENSE_RESET' : return {};
  default: return state;
  }
};