import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import reduxReporter from '../middleware/redux-reporter-middleware';
import localStorage from '../middleware/redux-session-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';
import {loadState} from './localstorage';

let persistedState = loadState();

export default () => createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(reduxReporter, localStorage)));