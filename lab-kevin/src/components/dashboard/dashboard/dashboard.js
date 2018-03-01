import React from 'react';
import {Route} from 'react-router-dom';
import {CategoryForm, CategoryItem} from '../../category/index.js';
import {category_create} from '../../../actions/category-actions.js'
import {DashNav} from '../index.js';
import {connect} from 'react-redux';

class Dashboard extends React.Component{
  render(){
    return (
    <section>
      <h2>Wealth is the ability to fully experience life. <span>--Henry David Thoreau</span></h2>
      {/*<DashNav path={this.props.match.path}/>*/}
      <DashNav path=""/>
      {/*<Route path={`${this.props.match.path}/category-create`} render={() => {*/}
        <Route path='/category-create' render={() => {
        return (
          <section className="category-create">
            <CategoryForm submit_text="Procreate" onComplete={this.props.dashboard_category_create}/>
          </section>
        );
      }} />
      {/*<Route path={`${this.props.match.path}/category-view`} render={() => {*/}
        <Route path='/category-view' render={() => {
        return (
        <ul className="category-list">
          {this.props.categories.length ? this.props.categories.map(category => 
            <CategoryItem key={category.id} category={category}/>
          ): undefined}
        </ul>
        );
      }} />
    </section>
    );
  }
}
  const mapStateToProps = state => ({categories: state.categories});

  const mapDispatchToProps = (dispatch, getState) => ({
    dashboard_category_create: category => dispatch(category_create(category))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);