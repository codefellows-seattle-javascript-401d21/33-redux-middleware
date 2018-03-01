// curried functions
export default store => next => action => {
  // Similar to (store,next,action)
  console.group(action.type || 'Initial State');
  console.info('DISPATCHING',action);

  // sgc - make sure to execute the next function
  let result = next(action);
  console.log('__NEXT_STATE__',store.getState());
  // Optional - Connect to Sentry.io and send logs there

  console.groupEnd(action.type || 'Initial State');
  // sgc - make sure to close the chain
  return result;
};
