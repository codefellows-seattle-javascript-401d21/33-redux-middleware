import React from 'react'
import {connect} from 'react-redux'
import {expenseUpdate} from '../../actions/expense-actions'
import {expenseDelete} from '../../actions/expense-actions'
import ExpenseForm from '../category/expense-form'

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.expense ? this.props.expense : {}
    
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.expenseDelete(this.state)
  }

  render() {
    return (
      <section id={this.props.expense._id}>
        <h3>Name</h3>
        <p>{this.props.expense.name}</p>
        <h3>Price</h3>
        <p>{this.props.expense.price}</p>
        <button className="deleteButton" onClick={() => this.props.expenseDelete(this.props.expense._id)}>delete</button>
        {/* <button className="deleteButton" id={this.props.expense._id} onClick={this.handleDelete}>Delete</button> */}
        <ExpenseForm
          buttonText="update"
          expense={this.props.expense}
          onComplete={this.props.expenseUpdate}/>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
})

const mapDispatchToProps = (dispatch, getState) => ({
  expenseUpdate: expense => dispatch(expenseUpdate(expense)),
  expenseDelete: expense => dispatch(expenseDelete(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem)
