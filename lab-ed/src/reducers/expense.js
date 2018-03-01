let initialState = {}

export default (state = initialState, action) => {
  let {type, payload} = action
  let categoryId
  let updateState

  switch(type) {
    case 'CATEGORY_CREATE': 
      return {...state, [payload._id]: []}

    case 'EXPENSE_DELETE':
      categoryId = payload.categoryId
      updateState = state[categoryId].filter(expenses => expenses._id !== payload._id)
      state[categoryId]
      return {...state, [categoryId]: updateState}

    case 'EXPENSE_CREATE':
    if (payload.name === '' || payload.price === '') throw new Error('all fields are required')
      state[payload.categoryId] = state[payload.categoryId].concat([payload])
      return {...state}

    case 'EXPENSE_UPDATE':
    if (payload.name === '' || payload.price === '') throw new Error('all fields are required')
      categoryId = payload.categoryId
      updateState = state[categoryId].map(expenses => expenses._id === payload._id ? payload : expenses)
      return {...state, [categoryId]: updateState}

    default: return state
  }
}
