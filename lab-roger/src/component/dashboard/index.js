import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate, categoryDelete, categoryUpdate} from '../../action/category-actions';
import CategoryForm from '../category-form/index';
import CategoryItem from '../category-item/index';

class Dashboard extends React.Component {
  render() {
    return(
      <section>
        <h1>Expenses Categories</h1>

        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate}/>
        <ul className='cat-view'>
          {this.props.categories ?
            this.props.categories.map(cat =>
              <CategoryItem key={cat._id} 
                category={cat} 
                
              />)
            :
            undefined
          }
        </ul>
      </section>    
    );
  }
}
const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
 
});

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);