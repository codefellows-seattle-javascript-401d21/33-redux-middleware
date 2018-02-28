export default (state=[], action) => {
  let {type, payload} = action;

  switch(type){
  case 'CATEGORY_CREATE':
    if(payload.name.trim().length === 0 || payload.budget < 0){
      throw new Error('Name cannot be empty or/and budget cannot be negative.');
    }
    return [...state, payload];
  case 'CATEGORY_UPDATE':
    if(payload.name.trim().length === 0 || payload.budget < 0){
      throw new Error('Name cannot be empty or/and budget cannot be negative.\nIf you wish to delete it, click delete button. If you wish to cancel, click cancel button.');
    }
    return state.map(category => category.id === payload.id ? payload : category);
  case 'CATEGORY_DELETE':
    if(!payload.id || payload.id.trim().length === 0){
      throw new Error('Category ID must be present.');
    }
    return state.filter(category => category.id !== payload.id);
  default:
    return state;
  }
};
