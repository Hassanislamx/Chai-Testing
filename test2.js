const assert = require('chai').assert;

  describe('Basic Assertions', function () {
    // #1
    it('#isNull, #isNotNull', function () {
      assert.isNull(null, 'This is an optional error description - e.g. null is null');
      assert.isNotNull(1, '1 is not null');
    });
    // #2
    it('#isDefined, #isUndefined', function () {
      assert.isDefined(null, 'null is not undefined');
      assert.isUndefined(undefined, 'undefined IS undefined');
      assert.isDefined('hello', 'A string is not undefined');
    });
    // #3
    it('#isOk, #isNotOk', function () {
      assert.isNotOk(null, 'null is falsey');
      assert.isOk("I'm truthy", 'A string is truthy');
      assert.isOk(true, 'true is truthy');
    });
    // #4
    it('#isTrue, #isNotTrue', function () {
      assert.isTrue(true, 'true is true');
      assert.isTrue(!!'double negation', 'Double negation of a truthy value is true');
      assert.isNotTrue({ value: 'truthy' }, 'Objects are truthy, but are not boolean values');
    });
  });