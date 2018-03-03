import React from 'react'

class CategoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.category
      ? this.props.category
      : {
        title: '',
        budget: '',
      }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState({
      title: '',
      budget: '',
    })
  }

  render() {
    return  (
      <section>
        <h2>Category</h2>
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          required="true"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input
          type="number"
          name="budget"
          placeholder="budget"
          required="true"
          value={this.state.budget}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
      </section>
    )
  }
}

export default CategoryForm
