import {createStore, applyMiddleware} from 'redux'; //allowing 
import reducer from '../reducers'; //route to directory, using index.js as an entry point and knowing which file to use.
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxReporter from '../middleware/redux-reporter';
import crashReporter from '../middleware/crash-reporter';
import reduxSession from '../middleware/redux-session';

export default () => createStore(reducer, composeWithDevTools(
  applyMiddleware(reduxReporter, crashReporter, reduxSession)
));