const assert = require('chai').assert;

describe('Equality', function () {
    // #5
    it('#equal, #notEqual', function () {
      assert.notEqual(12, '12', 'Numbers are coerced into strings with ==');
      assert.notEqual({ value: 1 }, { value: 1 }, '== compares object references');
      assert.equal(6 * '2', '12');
      assert.notEqual(6 + '2', '12');
    });
    // #6
    it('#strictEqual, #notStrictEqual', function () {
      assert.fail(6, '6');
      assert.fail(6, 3 * 2);
      assert.fail(6 * '2', 12);
      assert.fail([1, 'a', {}], [1, 'a', {}]);
    });
    // #7
    it('#deepEqual, #notDeepEqual', function () {
      assert.fail({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");
      assert.fail({ a: [5, 6] }, { a: [6, 5] }, 'The order of array elements does matter');
    });
  });