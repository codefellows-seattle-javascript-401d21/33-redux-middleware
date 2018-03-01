import React from 'react'
import {connect} from 'react-redux'
import {expenseUpdate} from '../../actions/expense-actions'
import {expenseDelete} from '../../actions/expense-actions'
import ExpenseForm from '../category/expense-form'

class ExpenseItem extends React.Component {

  render() {
    return (
      <section id={this.props.expense._id}>
        <h3>Name</h3>
        <p>{this.props.expense.name}</p>
        <h3>Price</h3>
        <p>{this.props.expense.price}</p>
        <button className="deleteButton" onClick={() => this.props.expenseDelete(this.props.expense)}>delete</button>
        <ExpenseForm
          buttonText="update"
          expense={this.props.expense}
          onComplete={this.props.expenseUpdate}/>
      </section>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = (dispatch, getState) => ({
  expenseUpdate: expense => dispatch(expenseUpdate(expense)),
  expenseDelete: expense => dispatch(expenseDelete(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem)
