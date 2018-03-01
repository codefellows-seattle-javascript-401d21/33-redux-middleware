import React from 'react';
import {Route} from 'react-router-dom';
import {Header, Footer} from '../';
import {Dashboard} from '../../dashboard';
import {Provider} from 'react-redux';
import store from '../../../lib/store.js';

class App extends React.Component{
  
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

