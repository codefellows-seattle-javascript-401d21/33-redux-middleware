// curried functions
export default store => next => action => {
  // Similar to (store, next, action)
  console.group(action.type || 'Initial State');
  console.info('DISPATCHING', action);

  // Making sure to execute the next function
  let result = next(action);
  console.log('__NEXT_STATE__', store.getState());
  // Connect to Sentry.io

  console.groupEnd(action.type || 'Initial State');
  // Making sure to close the chain
  return result;
};

