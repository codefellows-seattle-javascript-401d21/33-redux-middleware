// DOING IT THIS WAY IS CALLED CURRIED FUNCTIONS, WHERE THE INNER FUNCTIONS HAVE ACCESS TO EVERYTHING FROM THE OUTER FUNCTIONS

export default store => { //FUNCTION THAT RETURNS ANOTHER FUNCTION
  return next => {
    return action => { //(store, next action) kinda of. can think about this way, although not accurate
      console.group(action.type || 'Initial State');
      console.info('DISPATCHING', action);

      let result = next(action);
      console.log('__NEXT_STATE__', store.getState()); //checking state immediatley after action

      console.groupEnd(action.type || 'Initial State'); // closing the chain ayyy
      return result;
    };
  };
};

// export default store => next => action => {
//   console.group(action.type || 'Initial State');
//   console.info('DISPATCHING', action);

//   let result = next(action);
//   console.log('__NEXT_STATE__', store.getState()); //checking state immediatley after action

//   console.groupEnd(action.type || 'Initial State'); // closing the chain ayyy
//   return result;
// }