export const loadState = () => {
    
    try {
        let categoryItem = localStorage.getItem('categories');
        let expenseItem = localStorage.getItem('expenses');

        let categories = JSON.parse(categoryItem);
        let expenses = JSON.parse(expenseItem);

        const data = {categories, expenses};

        if(data.categories === null && data.expenses === null){
            return undefined;
        }

        return data;
    } catch(error){
        return undefined;
    }
};