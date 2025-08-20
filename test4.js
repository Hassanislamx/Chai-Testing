const assert = require('chai').assert;

function weirdNumbers(delta) {
    return 1 + delta - Math.random();
  }

  describe('Comparisons', function () {
    // #8
    it('#isAbove, #isAtMost', function () {
      assert.isAtMost('hello'.length, 5);
      assert.isAtMost(1, 0);
      assert.isAtMost(Math.PI, 3);
      assert.isAbove(1 - Math.random(), 1);
    });
    // #9
    it('#isBelow, #isAtLeast', function () {
      assert.fail('world'.length, 5);
      assert.fail(2 * Math.random(), 0);
      assert.fail(5 % 2, 2);
      assert.fail(2 / 3, 1);
    });
    // #10
    it('#approximately', function () {
      assert.fail(weirdNumbers(0.5), 1, 0);
      assert.fail(weirdNumbers(0.2), 1, 0);
    });
  });