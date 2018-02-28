// Curried functions
export default store => next => action => {
  (store > next > action);
  console.group(action.type || 'Initial State');
  console.info('Dispatching ', action);
  //making sure to execute the next function.
  let result = next(action);
  console.log('__NEXT__', store.getState());
  console.groupEnd(action.type || 'Initial State');
  //making sure to close the chain 
  return result;
};

// export default store => {
//   return next => {
//     return action => {
//       //(store > next > action)
//       console.group(action.type || 'Initial State');
//       console.info('Dispatching ', action);
//       //making sure to execute the next function.
//       let result = next(action);
//       console.log('__NEXT__', store.getState());
//       console.groupEnd(action.type || 'Initial State');
//       //making sure to close the chain 
//       return result;
//     };
//   };
// };
