//it should display the category name and budget
//display a delete button -- onClick the category will be removed from the app state
//will display a categoryForm--onComplete the form will update the component in the app state


import React from 'react';
import { connect } from 'react-redux';
import {
  categoryUpdate,
  categoryDelete
} from '../../../actions/category-actions';
import { renderIf } from '../../../lib/utils';
import CategoryForm from '../category-form/category-form';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cat || {};

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleUpdateForm = this.handleUpdateForm.bind(this);
  }

  handleUpdateForm() {
    this.setState({ editing: !this.state.editing });
  }

  handleUpdate(cat) {
    this.setState({ editing: !this.state.editing });
    this.props.CategoryItemCategoryUpdate(cat);
  }

  handleDelete() {
    this.props.CategoryItemCategoryDelete(this.state);
  }

  render() {
    return (
      <div key={this.props.cat._id} onDoubleClick={this.handleUpdateForm}>
        <h3>Category: {this.props.cat.title}</h3> 
        <p>Budget: ${this.props.cat.budget}</p>
        <button type='button' onClick={this.handleDelete}>
          Delete
        </button>
        {renderIf(
          this.state.editing,
          <CategoryForm
            category={this.props.cat}
            buttonText="Update"
            onComplete={this.handleUpdate}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state
});

const mapDispatchToProps = (dispatch, getState) => ({
  CategoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),
  CategoryItemCategoryDelete: category => dispatch(categoryDelete(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
