export default store => next => action => {
  let result = next(action);
  let state = store.getState();

  for (let key in state) {    
    localStorage.setItem(key,JSON.stringify(state[key]));
  }
  console.log(localStorage);
  
  return result;
};