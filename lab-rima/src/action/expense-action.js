import uuid from 'uuid/v4';


export const categoryCreate = category => {
  category.id = uuid();
  category.timestamp = new Date();

  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const categoryDelete = category => ({
  type: 'CATEGORY_DELETE',
  payload: category,
});

export const expenseCreate = expense => {
  expense.id = uuid();
  expense.timestamp = new Date();

  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseUpdate = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const expenseDelete = expense => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
});
