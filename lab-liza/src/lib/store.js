import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxReporter from '../middleware/redux-reporter';
import crashReporter from '../middleware/crash-reporter';
import reduxSession from '../middleware/redux-session-middleware';

export default () => createStore(reducer, composeWithDevTools(
  // The middleware will be executed in this exact order
  applyMiddleware(reduxReporter, crashReporter, reduxSession)
));
