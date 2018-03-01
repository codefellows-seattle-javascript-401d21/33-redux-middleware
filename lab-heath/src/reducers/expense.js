import {checker} from '../lib/payload-checker';

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;
  let categoryId, categoryExpenses, updatedExpenses;
  
  switch(type) {
  case 'CATEGORY_CREATE': 
    checker(payload);
    return {...state, [payload._id]: []};

  case 'CATEGORY_DELETE':
    checker(payload); 
    let changedState = {...state};
    delete changedState[payload._id];
    return changedState;

  case 'EXPENSE_CREATE':
    checker(payload);
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    updatedExpenses = [...categoryExpenses, payload];
    return {...state, [categoryId] : updatedExpenses};

  case 'EXPENSE_UPDATE': 
    checker(payload);
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    updatedExpenses = categoryExpenses.map(expenses => expenses._id === payload._id ? payload : expenses);
    return {...state, [categoryId] : updatedExpenses};

  case 'EXPENSE_DELETE': 
    checker(payload);
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    updatedExpenses = categoryExpenses.filter(expenses => expenses._id !== payload._id);
    return {...state, [categoryId]: updatedExpenses};

  case 'EXPENSE_RESET': 
    checker(payload); 
    return initialState;

  default: return state;
  }
};