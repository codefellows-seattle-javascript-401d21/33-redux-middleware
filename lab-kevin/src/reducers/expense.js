export default (state={}, action) => {
  let {type, payload} = action;
 
  const takeAction = {} 
  takeAction['CATEGORY_CREATE'] = category => ({...state, [category.id]: []});
  
  takeAction['CATEGORY_DELETE'] = id => {
    let tempState = {...state};
    delete tempState[id];
    return tempState;
  };

  takeAction['EXPENSE_CREATE'] = expense => {
    let tempState = {...state};
    tempState[expense.category_id].push(expense);
    return tempState;
  }

  takeAction['EXPENSE_UPDATE'] = expense => {
    let tempState = {...state};
    tempState[expense.category_id] = tempState[expense.category_id].map(exp => exp.id === expense.id ? expense : exp)
    return tempState;
  };

  takeAction['EXPENSE_DELETE'] = expense => {
    console.log(expense);
    let tempState = {...state};
    tempState[expense.category_id] = tempState[expense.category_id].filter(exp => exp.id !== expense.id);
    return tempState;
  };

  takeAction['EXPENSE_RESET'] = () => {};

  return takeAction[type] ? takeAction[type](payload) : state;
}