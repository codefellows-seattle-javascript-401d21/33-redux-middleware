
export const checker = arr => {
  if(!arr) {
    return 'No Payload detected';
  }

  let {timestamp, title, updating, value, _id} = arr;
  if(!timestamp, !title, !updating, !value, !_id) {
    return 'Payload is missing a part of the payload';
  }
};

