import React from 'react';
import {Link} from 'react-router-dom';

class DashNav extends React.Component{

  render(){
    return (
      <ul className="dash-nav-list">
        <li className="dash-nav-list-item"> 
          <Link to={`${this.props.path}/category-create`}>Procreation</Link>
        </li>
        <li className="dash-nav-list-item"> 
          <Link to={`${this.props.path}/category-view`}>Visualization</Link>
        </li>
        <li className="dash-nav-list-item"></li>
      </ul>
    );
  }
}

export default DashNav;