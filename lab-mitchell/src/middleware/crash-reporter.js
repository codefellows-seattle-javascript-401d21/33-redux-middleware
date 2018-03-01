export default store => next => action => {
  try {
    return next(action);
  } catch(exception) { // CAN USE ERROR
    // CHECK SENTRY.IO
    throw exception; // SAME AS ERROR
    // return action; //IF YOU WANT THINGS TO CONTINUE HAPPENING REGARDLESS OF EXCEPTION
  }
};