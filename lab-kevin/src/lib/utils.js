const validate = (data) => {
  if(!data) return false;
  let {id, timeStamp, name, amount} = data;
  if (!id || !timeStamp || (!name && !amount)) return false;
  return true;
};

export {validate};

