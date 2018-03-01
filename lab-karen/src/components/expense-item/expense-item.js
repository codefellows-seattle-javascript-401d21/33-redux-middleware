import React from 'react';
import {connect} from 'react-redux';
import {expenseUpdate, expenseDelete} from '../../actions/expense-actions';
import ExpenseForm from '../expense-form/expense-form';


class ExpenseItem extends React.Component {
  render() {
    return (
      <section id={this.props.expenses._id}>
        <h4>{this.props.expenses.title}</h4>
        <span onClick={() => this.props.expenseDelete(this.props.expenses)}>x</span>
        <ExpenseForm
          buttonText="Update"
          exp={this.props.expenses}
          onComplete={this.props.expenseUpdate}/>
      </section>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = (dispatch, getState) => ({
  expenseUpdate: expense => dispatch(expenseUpdate(expense)),
  expenseDelete: expense => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
