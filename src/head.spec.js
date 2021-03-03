const head = require('./head');

describe('Head',() => {
    it('First element in the list [1,2,3] is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('First element in list [] is null or undefined',() =>{
        expect(head([])).toEqual(null);
    });
})