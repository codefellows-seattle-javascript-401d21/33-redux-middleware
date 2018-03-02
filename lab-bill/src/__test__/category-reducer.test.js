import reducer from '../reducers/category';

describe('category reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle CATEGORY_CREATE', () => {
    let categoryOne = { _id: '1234', title: 'this is a title', timestamp: new Date()};
    let categoryTwo = { _id: '456', title: 'this is a title', timestamp: new Date() };
    let state = reducer([categoryOne], {
      type: 'CATEGORY_CREATE',
      payload: categoryTwo,
    });

    expect(state).toContain(categoryOne);
    expect(state).toContain(categoryTwo);
  });
});