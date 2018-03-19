export default store => next => action => {
  try {
    return next (action); //combing the result and the next action together
  } catch (exception){
    throw exception;
  }
};