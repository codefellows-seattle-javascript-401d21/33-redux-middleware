import React from 'react';
import {Nav} from '../index.js';

class Header extends React.Component{
  
  render(){
    return(
      <header>
        <h1>Allocation Calculation</h1>
        <Nav />
      </header>
    );
  }
}

export default Header;