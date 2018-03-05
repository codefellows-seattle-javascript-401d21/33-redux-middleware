import uuid from 'uuid/v4';

const category_create = category => {
  category.id = uuid();
  category.timeStamp = new Date();
 
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

const category_update = category => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};

const category_delete = id => {
  return {
    type: 'CATEGORY_DELETE',
    payload: id,
  };
};

const category_reset = () => ({type: 'CATEGORY_RESET'});


export {category_create, category_update, category_delete, category_reset};