export default store => next => action => {
  let result = next(action); //to ensure chain continues to the right of diagram
  let state = store.getState();

  //copies everything in store to localStorage, using the same keys
  // so can DO I HAVE THINGS IN STORAGE? IF YES, LOAD FROM LOCALSTORAGE
  for(let key in state) {
    // avoid storing anything important in localStorage (can stored hashed pass, token, but not naked pass/token nor in your store)
    localStorage[key] = JSON.stringify(state[key]);
  }

  return result; //to ensure chain continues to the left of diagram
};