import React from 'react';
import {connect} from 'react-redux';
import { renderIf } from '../../../lib/utils';
import CategoryForm from '../category-form/index';
import {categoryDelete, categoryUpdate} from '../../../actions/category-actions';

import ExpenseItem from '../../expense/expense-item';
import ExpenseForm from '../../expense/expense-form/index';
import {expenseCreate} from '../../../actions/expense-actions';



class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.category ?
      this.props.category :
      {
        title: '',
        value: 0,
        updating: false,
      };

    let memberFunctions = Object.getOwnPropertyNames(CategoryItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleDelete() {
    this.props.CategoryDelete(this.props.category);
  }

  handleUpdate(category) {
    this.props.CategoryUpdate(category);
    this.setState({updating: false});
  }

  render(){
    let totalSpend = this.props.expenses[this.props.category._id].reduce((a, b) => a + parseInt(b.value), 0);

    return(
      <div className={this.state.updating === true ? 'invis' : undefined}>
        <section className={this.state.updating === true ? 'items' : 'normal'} onDoubleClick={() => this.setState({updating: !this.state.updating})}>

          <h2>Category: {this.props.category.title}</h2>
          <h6>Date: {this.props.category.timestamp.toString()}</h6>
          <p>Amount: ${this.props.category.value - totalSpend}</p>
          
          {totalSpend > this.props.category.value ? alert('you broke man! stop spending money!') : undefined}

          <button
            className='delete_btn'
            type='button'
            value={this.props.category._id}
            onClick={this.handleDelete}
          >delete</button>

          {renderIf(this.state.updating === false,
            <ExpenseForm
              categoryId={this.props.category._id}
              buttonText='create expense'
              onComplete={this.props.ExpenseCreate} />
          )}

          {renderIf(this.state.updating === true,
            <CategoryForm 
              category={this.props.category}
              buttonText='update'
              onComplete={this.handleUpdate} />
          )}

          {renderIf(this.props.expenses[this.props.category._id],
            this.props.expenses[this.props.category._id].map(expense => 
              <ExpenseItem key={expense._id} expense={expense}/>)
          )}

        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
  
});

const mapDispatchToProps = (dispatch, getState) => ({
  CategoryDelete: category => dispatch(categoryDelete(category)),
  CategoryUpdate: category => dispatch(categoryUpdate(category)),

  ExpenseCreate: expense => dispatch(expenseCreate(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
