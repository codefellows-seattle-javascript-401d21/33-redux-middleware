import categoryReducer from './category';
import expenseReducer from './expense';
import {combineReducers} from 'redux';


export default combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer,
});
