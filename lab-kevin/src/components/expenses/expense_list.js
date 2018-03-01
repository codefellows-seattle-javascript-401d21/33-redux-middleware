import React from 'react';
import {connect} from 'react-redux';
import {CategoryForm} from '../category';
import {ExpenseItem} from '../expenses';
import {expense_create} from '../../actions/expense-actions.js';

class ExpenseList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isVisible: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.createExpense = this.createExpense.bind(this);
  }

  createExpense(expense){
    this.setState({isVisible: !this.state.isVisible});
    expense.category_id = this.props.catId;
    this.props.expenseList_expense_create(expense);
  }

  toggleForm(){
    this.setState({isVisible: !this.state.isVisible});
  }

  render(){
    return (
      <ul className="expense-list">
        <li className="expense-item-add">
          <div onClick={this.toggleForm}>New Expense</div>
          {this.state.isVisible ?
            <CategoryForm submit_text="Procreate" onComplete={this.createExpense}/>
            : undefined}
        </li>
        {this.props.expenses[this.props.catId] ? 
          this.props.expenses[this.props.catId].map(exp => 
            <ExpenseItem key={exp.id} expense={exp}/>
          ) 
          : undefined}
      </ul>
    );
  }

} 

const mapStateToProps = state => ({expenses: state.expenses});

const mapDispatchToProps = (dispatch, getState) => ({
  expenseList_expense_create : expense => dispatch(expense_create(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);