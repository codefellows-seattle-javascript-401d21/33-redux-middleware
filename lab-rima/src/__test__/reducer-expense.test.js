import reducer from '../reducer/expense';


describe('Expense reducer', () => {

  describe('default action', () => {
    test('should return an initial app state', () => {
      expect(reducer(undefined, {})).toEqual({});
    });
  });

  describe('category create action', () => {
    test('should create a new key(categoryId) value(empty array) in app state', () => {
      const mockCategory = {name: 'new one', budget: 100, id: '1'};
      expect(reducer({}, {type: 'CATEGORY_CREATE', payload: mockCategory})).toEqual({[mockCategory.id]:[]});
    });
  });

  describe('category delete action', () => {
    test('should return an updated state with category and all expenses that belong to that category removed', () => {
      const mockCategory = {name: 'new one', budget: 100, id: '1'};
      const mockExpense = {'1': [{id: '1', categoryId: '1', name: 'tets exp', price: 100}], '2': []};
      const updatedMockExpense = {'2': []};
      expect(reducer(mockExpense, {type: 'CATEGORY_DELETE', payload: mockCategory})).toEqual(updatedMockExpense);
    });
  });

  describe('expense create action', () => {
    test('should return an app state with a new expense', () => {
      const mockExpense = {name: 'new expense', price: 100, categoryId: '1', id: '1'};
      const mockCategory = {name: 'new one', budget: 100, id: '1'};
      let state = reducer({}, {type: 'CATEGORY_CREATE', payload: mockCategory});
      let expected = {'1': [mockExpense]};
      expect(reducer(state, {type: 'EXPENSE_CREATE', payload: mockExpense})).toEqual(expected);
    });
  });

  describe('expense update action', () => {
    test('should return an app state with an updated expense', () => {
      const mockExpense = {name: 'new expense', price: 100, categoryId: '1', id: '1'};
      const mockCategory = {name: 'new one', budget: 100, id: '1'};
      let state = reducer({}, {type: 'CATEGORY_CREATE', payload: mockCategory});
      state = reducer(state, {type: 'EXPENSE_CREATE', payload: mockExpense});
      const updatedMockExpense = {name: 'updated expense', price: 200, categoryId: '1', id: '1'};
      const expected = {'1': [updatedMockExpense]};
      expect(reducer(state, {type: 'EXPENSE_UPDATE', payload: updatedMockExpense})).toEqual(expected);
    });
  });

  describe('expense delete action', () => {
    test('should return an app state with a expense removed', () => {
      const mockExpense = {name: 'new expense', price: 100, categoryId: '1', id: '1'};
      const mockCategory = {name: 'new one', budget: 100, id: '1'};
      let state = reducer({}, {type: 'CATEGORY_CREATE', payload: mockCategory});
      let expected = {'1': []};
      expect(reducer(state, {type: 'EXPENSE_DELETE', payload: mockExpense})).toEqual(expected);
    });
  });
});
