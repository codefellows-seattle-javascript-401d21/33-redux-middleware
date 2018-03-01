export default store => next => action => {
  console.group(action.type || 'Initial state')
  console.info('DISPATCHING', action)

  let result = next(action)
  console.log('NEXT STATE', store.getState())

  console.groupEnd(action.type || 'Initial state')
  return result
}

