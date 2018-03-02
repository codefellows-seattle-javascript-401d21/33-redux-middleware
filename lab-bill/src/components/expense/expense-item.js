import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../expense/expense-form';
import {expenseUpdate, expenseDestroy} from '../../actions/expense-actions';
// import { renderIf } from '../lib/index';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display:false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.getOrSetState = this.getOrSetState.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.ExpenseDestroy(this.props.expense);
  }

  handleChangeState(){
    this.setState({display:true});
  }

  getOrSetState() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render(){
    return(
      <li>
        <h2>{this.props.expense.name}</h2>
        <p>{this.props.expense.price}</p>
        <button type='submit' onClick={this.handleClick}> delete </button>
        <ExpenseForm buttonText='update expense' update={this.props.ExpenseUpdate} destroy ={this.props.ExpenseDestroy} expense={this.props.expense}/>
      </li>
    );
  }
}


let mapStateToProps = () => ({});
let mapDispatchToProps = (dispatch, getState) => ({
  ExpenseUpdate: expense => dispatch(expenseUpdate(expense)),
  ExpenseDestroy: expense => dispatch(expenseDestroy(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);