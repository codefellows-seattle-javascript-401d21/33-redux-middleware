import uuid from 'uuid/v4';

const expense_create = expense => {
  expense.id = uuid();
  expense.timeStamp = new Date();
  //expense.editing = false;

  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

const expense_update = expense => {
  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  };
};

const expense_delete = expense => {
  return {
    type: 'EXPENSE_DELETE',
    payload: expense,
  };
};

const expense_reset = () => ({type: 'EXPENSE_RESET'});


export {expense_create, expense_update, expense_delete, expense_reset};