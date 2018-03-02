export default store => next => action => {
  try {
    return next(action);
  } catch (exception) {
    // optional check sentry.io
    throw exception;
  }
};

