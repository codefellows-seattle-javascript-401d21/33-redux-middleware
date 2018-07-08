import reducer from '../reducers/category'
require('jest')

describe('category reducer', () => {
  it('should return the initial state on first call', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle CATEGORY_CREATE', () => {
    let categoryOne = { _id: '1222', title: 'dogs', timestamp: new Date() }
    let categoryTwo = { _id: '2333', title: 'cats', timestamp: new Date() }

    let state = reducer([categoryOne], {
      type: 'CATEGORY_CREATE',
      payload: categoryTwo,
    })

    expect(state).toContain(categoryOne)
    expect(state).toContain(categoryTwo)
  })
})