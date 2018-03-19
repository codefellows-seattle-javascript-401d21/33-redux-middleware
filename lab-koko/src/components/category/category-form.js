import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category
      ? this.props.category
      : {
        title: '',
        budget: 0,
        edit: false,
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({
      title: '',
      budget: 0,
      edit: false,
    });
  }
  render() { 
    return ( 
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input className="title"
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Category Title"
          onChange= {this.handleChange}
        />
        <input className="budget"
          type="number"
          name="budget"
          value={this.state.budget}
          onChange= {this.handleChange}
        />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}
 
export default CategoryForm;