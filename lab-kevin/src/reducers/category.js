export default (state=[], action) => {
  let {type, payload} = action;

  const takeAction = {} 
  takeAction['CATEGORY_CREATE'] = category => [...state, category];
  takeAction['CATEGORY_UPDATE'] = category => state.map(cat => cat.id === category.id ? category : cat);
  takeAction['CATEGORY_DELETE'] = id => state.filter(cat=> cat.id !== id);
  takeAction['CATEGORY_RESET'] = () => [];
  return takeAction[type] ? takeAction[type](payload) : state;
}