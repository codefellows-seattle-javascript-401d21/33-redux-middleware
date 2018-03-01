import React from 'react';
import {connect} from 'react-redux';
import {expenseUpdate} from '../../action/expense-action';
import ExpenseForm from '../expense-form/index';
import {renderIf} from '../../lib/utils';


class ExpenseItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      editing: false,
    };

    let memberFunctions = Object.getOwnPropertyNames(ExpenseItem.prototype);
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
    this.props.onClick(this.props.expenseItem);
  }

  handleDoubleClick(event) {
    event.preventDefault();
    this.setState({editing: true});
  }

  render(){
    return <li
      key={this.props.expenseItem.id}
    >
      <p onDoubleClick={this.handleDoubleClick}>{this.props.expenseItem.name}: {this.props.expenseItem.price}</p>

      <button
        className="delete"
        onClick={this.handleClick}>
          Delete
      </button>

      {renderIf(this.state.editing,
        <ExpenseForm
          editing={this.handleGetSetState()}
          expense={this.props.expenseItem}
          buttonText="update"
          onComplete={this.props.expenseItemExpenseUpdate} />
      )}
    </li>;
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  expenseItemExpenseUpdate: expense => dispatch(expenseUpdate(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
