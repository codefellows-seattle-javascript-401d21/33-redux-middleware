import { createStore } from 'redux';
import reducer from '../reducers/category';

//this will return a new redux store from the cat reducer
export default () => createStore(reducer);
