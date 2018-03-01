import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
import {Header, Footer} from '../index.js';
import {Dashboard} from '../../dashboard/index.js';
import {Provider} from 'react-redux';
import store from '../../../lib/store.js';

class App extends React.Component{

  componentDidMount() {
    store.subscribe(() => console.log('__STATE__: ', store.getState()))
    store.dispatch({type: null})
  }
  
  render(){
    return (
      <div>
        <Header/>
        <main>
          <Provider store={store}>
            <Route path='/' component={Dashboard} />
          </Provider>
        </main> 
        <Footer/> 
      </div>
    );  
  }
}

export default App;

