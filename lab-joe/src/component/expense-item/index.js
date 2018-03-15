import React from 'react';

import {connect} from 'react-redux';

import {expenseCreate, expenseUpdate, expenseDelete} from '../../action/expense-actions';
import ExpenseForm from '../expense-form/index';
import {renderIf} from '../../lib/util';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      editing: false,
      expenseView: false,
      expenseListView: false,

    };

    this.handleEditing = this.handleEditing.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
    this.handleExpenseList = this.handleExpenseList.bind(this);
  }
  handleEditing() {
    this.setState({editing: !this.state.editing});
  }
  handleAddExpense() {
    this.setState({expenseView: !this.state.expenseView});
  }
  handleExpenseList() {
    this.setState({expenseListView: !this.state.expenseListView});
  }

  handleDelete() {
    this.props.itemExpenseDelete(this.props.expense);
  }


  render() {

    return (
      <li className='expense-item'>
        <p>{this.props.expense.name}</p>
        <p>   {this.props.expense.amount}</p>
        <button onClick={this.handleEditing}>Update</button>
        <button onClick={this.handleDelete}>Delete</button>


        {renderIf ((this.state.editing),
          <ExpenseForm
            buttonText='update'
            onComplete={this.props.itemExpenseUpdate}
            expense={this.props.expense}
            toggleEdit={this.handleEditing}
          />)}
      </li>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  itemExpenseCreate: expense => dispatch(expenseCreate(expense)),
  itemExpenseDelete: expense => dispatch(expenseDelete(expense)),
  itemExpenseUpdate: expense => dispatch(expenseUpdate(expense)),

});

export default connect(mapStateToProps, mapDispatchToProps) (ExpenseItem);