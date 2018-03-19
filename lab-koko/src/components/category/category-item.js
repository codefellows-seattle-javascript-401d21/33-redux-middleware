import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category/category-form';
import { renderIf } from '../../lib/utils';
import { categoryUpdate, categoryDelete } from '../../actions/category-actions';
import ExpenseForm from '../expenses/expense-form';
import ExpenseItem from '../expenses/expense-item';
import { expenseCreate } from '../../actions/expense-actions';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category ? this.props.category : {},
      edit: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.categoryItemCategoryDelete(this.state);
  }
  render() { 
    return ( 
      <div className="categoryItems">
        <div className="category-item" onDoubleClick={() => this.setState({edit: !this.state.edit})}>
          <h3>{this.props.category.title}</h3>
          <p>Budget: ${this.props.category.budget}</p>
          <button id={this.props.category._id} onClick={this.handleDelete}>Delete</button>
        </div>
        {renderIf(this.state.edit,
          <CategoryForm category={this.props.category} 
            buttonText='Update' 
            onComplete={this.props.categoryItemCategoryUpdate}/>
        )}
        <h2>Add an expense</h2>
        <ExpenseForm 
          className="expense-form"  
          buttonText= 'Add'
          categoryId ={this.props.category._id}
          onComplete={this.props.categoryListExpenseCreate}
        />
        {renderIf(this.props.expenses[this.props.category._id],
          this.props.expenses[this.props.category._id].map(expense => <ExpenseItem key={expense._id} expense={expense}/>)
        )}
      </div>
    );
  }
} 
const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});
const mapDispatchToProps = (dispatch, getState) => ({
  categoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryItemCategoryDelete: category => dispatch(categoryDelete(category)),
  categoryListExpenseCreate: expense => dispatch(expenseCreate(expense)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);