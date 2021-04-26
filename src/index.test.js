const { intersperse } = require('./index.js')

test('Testing intersperse with array and word', () => {
    const result = [1, 'hello', 2, 'hello', 3]
    expect(intersperse([1, 2, 3], 'hello')).toEqual(result)
})
