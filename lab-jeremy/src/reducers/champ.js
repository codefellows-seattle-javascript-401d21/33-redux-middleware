let validateChamp = payload => {
  if(!payload._id) throw new Error('VALIDATION ERROR. Champ must have an ID');
  if(!payload.name) throw new Error('VALIDATION ERROR. Champ must have name');
};

export default (state={}, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'SEASON_CREATE': return {...state, [payload._id]: []};
  case 'SEASON_DELETE':
    delete state[payload._id];
    return {...state};
  case 'CHAMP_GET': return payload;
  case 'CHAMP_CREATE':
    validateChamp(payload);
    state[payload._id] = state[payload._id].concat([payload]);
    return {...state};
  case 'CHAMP_UPDATE':
    validateChamp(payload);
    state[payload._id] = state[payload._id].map(champ =>
      champ._id === payload._id ? payload : champ);
    return {...state};
  case 'CHAMP_DELETE':
    validateChamp(payload);
    state[payload._id] = state[payload._id].filter(champ => champ._id !== payload._id);
    return {...state};
  default: return state;
  }
};
