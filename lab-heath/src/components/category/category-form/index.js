import React from 'react';
import { renderIf } from '../../../lib/utils';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category
      ? this.props.category
      : {
        title: '',
        value: 0,
        updating: false,
      };
      
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    !this.state.value || !this.state.title ? alert('need both inputs') :
      this.props.onComplete(this.state);
    this.setState({
      title: '',
      value: 0,
    });
  }

  render() {
    return  (
      <form className="input-area" onSubmit={this.handleSubmit}>
        <input className="input"
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input className="input"
          type="number"
          name="value"
          placeholder="amount"
          value={this.state.value}
          onChange={this.handleChange}/>

        <button className="submit_btn" type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;