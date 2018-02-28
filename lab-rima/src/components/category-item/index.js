import React from 'react';
import {connect} from 'react-redux';
import {categoryUpdate} from '../../action/category-action';
import {expenseCreate, expenseDelete} from '../../action/expense-action';
import CategoryForm from '../category-form/index';
import ExpenseForm from '../expense-form/index';
import ExpenseItem from '../expense-item/index';
import {renderIf} from '../../lib/utils';


class CategoryItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      editing: false,
    };

    let memberFunctions = Object.getOwnPropertyNames(CategoryItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleGetSetState() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.categoryItem);
  }

  handleDoubleClick(event) {
    event.preventDefault();
    this.setState({editing: true});
  }

  render(){
    return <li
      key={this.props.key}
    >
      <h3 onDoubleClick={this.handleDoubleClick}>{this.props.categoryItem.name}: {this.props.categoryItem.budget}</h3>

      <button
        className="delete"
        onClick={this.handleClick}>
          Delete
      </button>

      {renderIf(this.state.editing,
        <CategoryForm
          editing={this.handleGetSetState()}
          category={this.props.categoryItem}
          buttonText="update"
          onComplete={this.props.categoryItemCategoryUpdate} />
      )}

      <section>
        <h4>Expense: {this.props.categoryItem.name}</h4>

        <ExpenseForm
          categoryId={this.props.categoryItem.id}
          buttonText='create'
          onComplete={this.props.categoryItemExpenseCreate} />

        <ul>
          {
            this.props.expenses[this.props.categoryItem.id].map(expenseItem => {
              return <ExpenseItem 
                key={expenseItem.id}
                expenseItem={expenseItem}
                onClick={this.props.categoryItemExpenseDelete} />;
            })
          }
        </ul>
      </section>
    </li>;
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryItemExpenseCreate: expense => dispatch(expenseCreate(expense)),
  categoryItemExpenseDelete: expense => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
