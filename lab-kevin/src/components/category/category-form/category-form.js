import React from 'react';

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = props.category ||
      {
        name: '',
        amount: 0,
      }

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
      
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    if(!this.state.name && !this.state.amount) return;
    this.props.onComplete(this.state)
    this.setState({name: '', amount: 0});
  }


  render(){
    return (
      <form className="category-form" onSubmit={this.handleSubmit} >
      <input name="name" 
        type="text" 
        value={this.state.name} 
        onChange={this.handleChange}/>

      <label>$</label>
      <input name='amount' 
        type="number" 
        min="0" 
        step=".01" 
        value={this.state.amount} 
        onChange={this.handleChange}/>
      <button type="submit" >{this.props.submit_text}</button>
      </form>
    );
  }
}

export default CategoryForm;