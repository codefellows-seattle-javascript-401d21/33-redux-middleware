import {combineReducers} from 'redux';
import category_reducer from '../reducers/category.js';
import expense_reducer from '../reducers/expense.js';

export default combineReducers({
  expenses: expense_reducer,
  categories: category_reducer,
});