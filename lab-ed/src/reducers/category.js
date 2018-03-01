let initialState = []

export default (state=initialState, action) => {
  let {type, payload} = action

  switch(type) {
  case 'CATEGORY_CREATE':
    return state.concat([payload])

  case 'CATEGORY_UPDATE':
    return state.map(cat => cat._id === payload._id ? payload : cat)

  case 'CATEGORY_DELETE':
    return state.filter(cat => cat._id !== payload._id)

  case 'CATEGORY_RESET':
    return initialState

  default: return state
  }
}
