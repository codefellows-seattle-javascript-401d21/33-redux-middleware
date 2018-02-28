import React from 'react';
import {renderIf} from '../../lib/utils';

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.expense ? this.props.expense :
      {
        categoryId: this.props.categoryId,
        name: '',
        price: 0,
      };

    let memberFunctions = Object.getOwnPropertyNames(ExpenseForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleChange(event){
    let {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);

    this.setState({
      categoryId: this.props.categoryId,
      name: '',
      price: 0,
    });
  }

  handleClick(event){
    event.preventDefault();

    this.props.editing.setState({editing: false});

    this.setState({
      categoryId: this.props.categoryId,
      name: '',
      price: 0,
    });
  }

  render(){
    return(
      <form
        className="expense-form"
        onSubmit={this.handleSubmit}
        id="expense-form">

        <input
          className="name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter a name"/>

        <input
          className="price"
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}/>

        <button
          className="save"
          type="submit">
          {this.props.buttonText}
        </button>

        {renderIf(this.props.editing,
          <button
            className="cancel"
            type="button"
            onClick={this.handleClick}>
            cancel
          </button>
        )}
      </form>
    );
  }
}

export default ExpenseForm;
