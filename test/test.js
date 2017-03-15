var _       = require("../src/functions.js");
var assert  = require('assert');

describe('jira-chrome-extension', function() {

  describe('getMultiplier()', function() {
    it('should return "40" when "w" is provided', function() {
      assert.equal(40, _.getMultiplier("w"));
    });
    it('should return "8" when "d" is provided', function() {
      assert.equal(8, _.getMultiplier("d"));
    });
    it('should return "1" when "h" is provided', function() {
      assert.equal(1, _.getMultiplier("h"));
    });
    it('should return "0" when "m" is provided', function() {
      assert.equal(0, _.getMultiplier("m"));
    });
    it('should return "0" when something unknown is provided', function() {
      assert.equal(0, _.getMultiplier("azerty"));
    });
  });

  describe('textToInteger()', function() {
    it('should return "59" when "1w 2d 3h 4m" is provided', function() {
      assert.equal(59, _.textToInteger("1w 2d 3h 4m"));
    });
    it('should return "43" when "1w 3h" is provided', function() {
      assert.equal(43, _.textToInteger("1w 3h"));
    });
    it('should return "19" when "2d 3h" is provided', function() {
      assert.equal(19, _.textToInteger("2d 3h"));
    });
    it('should return "3" when "3h" is provided', function() {
      assert.equal(3, _.textToInteger("3h"));
    });
  });

});
