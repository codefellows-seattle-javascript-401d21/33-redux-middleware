import React from 'react';
import {connect} from 'react-redux';
import {Modal} from '../app';
import {CategoryForm} from '../category';
import {expense_update, expense_delete} from '../../actions/expense-actions.js';

class ExpenseItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //editing: this.props.expense.editing,
      editing: false,
      expense: this.props.expense,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleDelete(){
    this.props.expenseItem_expense_delete(this.props.expense);
  }

  handleDoubleClick(e){
    e.stopPropagation();
    this.setState({editing: true});
  }

  handleClose(){
    this.setState({editing: false});
  }

  render(){
    return (
      <li className="expense-item" onDoubleClick={this.handleDoubleClick}>
        {/*<span className="expense-item-timeStamp">{this.props.expense.timeStamp.toDateString()}</span>*/}
        <div>
          <span className="expense-item-name">{this.props.expense.name}</span>
          <span className="expense-item-amount">{this.props.expense.amount}</span>
          <button className="expense-item-delete"
            onClick={this.handleDelete}>x</button>
        </div>
        { this.state.editing ? 
          <Modal onClose={this.handleClose}>
            <CategoryForm submit_text="Re-evaluation" 
              category={this.state.expense}
              onComplete={this.props.expenseItem_expense_update}/>
          </Modal >
          : undefined
        }
      </li>
    );
  }
}


const mapStateToProps = state => ({expenses: state.expenses});

const mapDispatchToProps = (dispatch) => ({
  expenseItem_expense_update : expense => dispatch(expense_update(expense)),
  expenseItem_expense_delete : expense => dispatch(expense_delete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);