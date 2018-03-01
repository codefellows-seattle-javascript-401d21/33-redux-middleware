import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import reduxReporter from '../middleware/reporter-middleware';
import localStorage from '../middleware/local-storage-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';
import { loadState } from '../lib/load-storage';

let persistedState = loadState();


export default () => createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(reduxReporter, localStorage)));