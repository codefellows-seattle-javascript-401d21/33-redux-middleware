import React from 'react'
import {connect} from 'react-redux'
import {categoryCreate, categoryUpdate, categoryDestroy} from '../../actions/category-action'
import CategoryForm from '../category/category-form'
import CategoryItem from '../category/category-item'

class Dashboard extends React.Component {
  render() {
    return (
      <section className="dashboard">
        <h1>Expenses</h1>

        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate}/>

        {this.props.categories ?
          this.props.categories.map(cat =>
            <CategoryItem key={cat._id} category={cat} update={this.props.dashboardCategoryUpdate} destroy={this.props.dashboardCategoryDestroy}/>
          )
          :
          undefined
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses
})

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
  dashboardCategoryUpdate: category => dispatch(categoryUpdate(category)),
  dashboardCategoryDestroy: category => dispatch(categoryDestroy(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)