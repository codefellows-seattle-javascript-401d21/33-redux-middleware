import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from '../reducers';
import store_reporter from '../middleware/store-reporter';

let  store =  (process.env.NODE_ENV !== 'production') ? 
  createStore(reducers, 
    composeWithDevTools(applyMiddleware(store_reporter)
    )) 
  : createStore(reducers);

export default store;