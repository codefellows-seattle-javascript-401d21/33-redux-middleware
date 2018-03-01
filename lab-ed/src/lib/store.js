import {createStore} from 'redux'
import {applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reduxReporter from '../middleware/redux-reporter'
import crashReporter from '../middleware/crash-reporter'
import reduxSession from '../middleware/redux-session-middleware'
import reducer from '../reducers'

export default () => createStore(reducer,composeWithDevTools(
  applyMiddleware(reduxReporter,crashReporter,reduxSession)
))

