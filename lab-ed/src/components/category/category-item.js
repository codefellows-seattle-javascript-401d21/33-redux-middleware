import React from 'react'
import {connect} from 'react-redux'
import {categoryUpdate} from '../../actions/category-actions'
import {categoryDelete} from '../../actions/category-actions'
import CategoryForm from './category-form'
import {renderIf} from '../../lib/utils'
import ExpenseForm from './expense-form'
import ExpenseItem from './expense-item'
import {expenseCreate} from '../../actions/expense-actions'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.category ? this.props.category : {}
    
    this.handleEditing = this.handleEditing.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleEditing() {
    this.setState({editing: !this.state.editing})
  }

  handleDelete() {
    this.props.categoryDelete(this.state)
  }

  render() {
    return (
        <section className="category-item" onDoubleClick={this.handleEditing}>
          <h2>Category</h2>
          <p>{this.props.category.title}</p>
          <h3>Budget</h3>
          <p className="budget">${this.props.category.budget}</p>
          <button className="deleteButton" onClick={this.handleDelete}>delete</button>

          {renderIf(this.state.editing, <CategoryForm
            category={this.props.category}
            buttonText='update category'
            onComplete={this.props.categoryUpdate}/>)}

        <ExpenseForm
          buttonText="create expense"
          catTitle={this.props.category.title}
          categoryId={this.props.category._id}
          onComplete={this.props.expenseCreate}/>

        {renderIf(this.props.expenses[this.props.category._id],
          this.props.expenses[this.props.category._id].map(expense => <ExpenseItem key={expense._id} expense={expense}/>)
        )}
        </section>
    )
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
})

const mapDispatchToProps = (dispatch, getState) => ({
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDelete: category => dispatch(categoryDelete(category)),
  expenseCreate: expense => dispatch(expenseCreate(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)