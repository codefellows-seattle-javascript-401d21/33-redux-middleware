import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../actions/category-actions';
import CategoryItem from '../category/category-item/index.js';
import CategoryForm from '../../components/category/category-form/index';
import category from '../../reducers/category';
import index from '../category/category-item/index.js';
import expense from '../../reducers/expense';



class Dashboard extends React.Component {
  render() {
    let totalSpend = this.props.categories.reduce((a, b) => a + parseInt(b.value), 0);
    return (
      <section className="dashboard">
        <h1>Expense Tracker 2000!</h1>
        <h3 className="total">Total Spend: ${totalSpend}</h3>
        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate}/>
          
        {this.props.categories ?
          this.props.categories.map(category => 
            <div key={category._id}>
              <CategoryItem category={category}/>
              
            </div>)
          :
          undefined
        }

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);