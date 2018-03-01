import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from './category-form';
import ExpenseForm from '../expense/expense-form';
import {expenseCreate, expenseUpdate, expenseDestroy} from '../../actions/expense-actions';
import ExpenseItem from '../expense/expense-item';

// import { renderIf } from '../lib/index';

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: this.props.category ? this.props.category : {},
      display: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.getOrSetState = this.getOrSetState.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.destroy(this.props.category);
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
      <section>
        <h2>{this.props.category.name}</h2>
        <p>{this.props.category.budget}</p>
        <button type='submit' onClick={this.handleClick}> delete </button>
        <CategoryForm buttonText='update' update={this.props.CategoryUpdate} category={this.props.category}/>
        <ExpenseForm buttonText='add new expense' onComplete={this.props.ExpenseCreate} expenseState={this.props.expenses} categoryId={this.props.category._id}/>
        {this.props.expenses[this.props.category._id] ?
          this.props.expenses[this.props.category._id].map(expense =>
            <ExpenseItem categoryId={this.props.category._id} expense={expense} key={expense._id}/>
          )
          :
          undefined
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  ExpenseCreate: expense => dispatch(expenseCreate(expense)),
  // CategoryUpdate: category => dispatch(categoryUpdate(category)),
  // CategoryDestroy: category => dispatch(categoryDestroy(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);