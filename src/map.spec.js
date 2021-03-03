const map = require('./map');

describe('Map',() => {
    it('map function on empty array is []', () => {
        expect(map([],x=>x**3)).toEqual([]);
    });

    it('map function on array [1,2,3] with identity function is [1,2,3]', () => {
        expect(map([1,2,3],x=>x)).toEqual([1,2,3]);
    });

    it('map function on array [1,2,3] with cube function is [1,8,27]', () => {
        expect(map([1,2,3],x=>x**3)).toEqual([1,8,27]);
    });

    it('map function on array [a{x:10}] with increment function is [11]', () => {
        expect(map([{x : 10}],obj => obj.x + 1)).toEqual([11]);
    });
})