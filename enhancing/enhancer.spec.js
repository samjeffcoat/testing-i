const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    test('can run the tests', ()=> {
        expect(true).toBe(true);
    })
})

describe('repair()', ()=> {
    it('should return durability to be restored to 100', () => {
expect(repair((1,2, 3))).toBe(100);
    })})