const add = require('./product');

test('adds 1 + 2 to equal 3',() => {
    expect(add(1, 2)).toBe(3);
})

test('adding floating point numbers',() => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
})

test('adding negetive numbers', () => {
    expect(add(-1, -2)).toBe(-3);
})
