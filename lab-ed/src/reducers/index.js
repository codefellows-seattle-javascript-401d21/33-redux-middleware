import {combineReducers} from 'redux'
import categoryReducer from './category'
import expenseReducer from './expense'

export default combineReducers({
  expenses: expenseReducer,
  categories: categoryReducer,
})