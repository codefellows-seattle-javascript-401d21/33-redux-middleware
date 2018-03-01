let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;
  

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload._id]: []};
  case 'CATEGORY_DELETE': {
    let changedState = {...state};
    delete changedState[payload._id];
    console.log('changed state after delete of category', changedState);
    return changedState;
  }
  case 'EXPENSE_CREATE': {
    let changedState = {...state};
    changedState[payload.category].push(payload);
    return changedState;
  }
    
  case 'EXPENSE_UPDATE': {
    let changedState = {...state};
    let array = changedState[payload.category];
    let changedArray = array.map(expense => expense._id === payload._id ? payload : expense);
    return changedState;

  }
  case 'EXPENSE_DELETE': {
    
    let changedState = {...state};
    let array = changedState[payload.category];
    let changedArray = array.filter(expense=> expense._id !== payload._id);
    changedState[payload.category] = changedArray;
    return changedState;
  }  
    
  case 'EXPENSE_RESET': return initialState; 
  default: return state;

  }



};


