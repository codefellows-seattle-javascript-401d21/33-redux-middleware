import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category
      ? this.props.category
      : {
        title: '',
        budget: '',
      };
    console.log('cf', this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
    this.setState({title: '', budget: ''});
  }

  render() {
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Budget Category"
          value={this.props.title}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="budget"
          placeholder="Budget Amount"
          value={this.props.budget}
          onChange={this.handleChange}/>
        <button type="submit">{this.props.buttonText}</button>
      </form>

    );
  }
}

export default CategoryForm;
