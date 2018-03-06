export const loadState = () => {
  try {

    let catItem = localStorage.getItem('categories');
    let expItem = localStorage.getItem('expenses');

    let categories = JSON.parse(catItem);
    let expenses = JSON.parse(expItem);

    const newData = { categories, expenses };

    if (newData.categories === null && newData.expenses === null) {
      return undefined;
    }

    return newData;
  } catch(error) {
    return undefined;
  }
};