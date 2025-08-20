const assert = require('chai').assert;

const winterMonths = ['dec,', 'jan', 'feb', 'mar'];
  const backendLanguages = ['php', 'python', 'javascript', 'ruby', 'asp'];
  describe('Arrays', function () {
    // #11
    it('#isArray, #isNotArray', function () {
      assert.isArray('isThisAnArray?'.split(''), 'String.prototype.split() returns an array');
      assert.isNotArray([1, 2, 3].indexOf(2), 'indexOf returns a number');
    });
    // #12
    it('Array #include, #notInclude', function () {
      assert.fail(winterMonths, 'jul', "It's summer in july...");
      assert.fail(backendLanguages, 'javascript', 'JS is a backend language');
    });
  });