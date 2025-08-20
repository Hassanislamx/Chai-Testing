const assert = require('chai').assert;

  describe('Math Test', function() {
  it('2 + 2 should equal 4', function() {
    assert.equal(2 + 2, 4);
  });

  it('variable should be defined', function() {
    let myVar = "Hassan";
    assert.isDefined(myVar);
  });
});
