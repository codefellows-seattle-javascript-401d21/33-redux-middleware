import React from 'react';
import {Modal} from '../../app'
import {CategoryForm} from '../../category';
import {ExpenseList} from '../../expenses';
import {connect} from 'react-redux';
import {category_update, category_delete} from '../../../actions/category-actions.js'


class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      editing: this.props.category.editing,
      isVisible: false,
    }

    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleToggleExpenses = this.handleToggleExpenses.bind(this)
  }

  handleToggleExpenses(){
    this.setState({isVisible: !this.state.isVisible});
  }

  handleDoubleClick(e){
    if (!e.currentTarget.className === 'category-list-item') return;
    this.setState({editing: true})
  }

  handleClose(e){
    this.setState({editing: false});
  }

  handleDelete(){
    this.props.CategoryItem_category_delete(this.props.category.id)
  }

  render(){
    return (
      <li className="category-list-item" onDoubleClick={this.handleDoubleClick}>
        <span className="category-timestamp">{this.props.category.timeStamp.toDateString()}</span>
        <button className="category-expense-button" onClick={this.handleToggleExpenses}>Expenses</button>
        <div>
          <p>
            <span className="category-name">{this.props.category.name}</span>
            <span className="category-amount">{this.props.category.amount}</span>
          </p> 
          <button className="category-delete-btn" onClick={this.handleDelete} >NIX</button>
        </div>
        { this.state.isVisible ?
          <ExpenseList catId={this.props.category.id}/>
          : undefined}
        { this.state.editing ? 
            <Modal onClose={this.handleClose}>
              <CategoryForm submit_text="Re-evaluation" 
                category={this.props.category}
                onComplete={this.props.CategoryItem_category_update}/>
            </Modal >
            : undefined
        }
      </li>
    );
  }
}

const mapStateToProps = state => ({categories: state.categories});
const mapDispatchToProps = (dispatch, getState) => ({
  CategoryItem_category_update: category => dispatch(category_update(category)),
  CategoryItem_category_delete: id => dispatch(category_delete(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);