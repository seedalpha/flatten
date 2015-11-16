var flatten = require('./');
var should  = require('chai').should();

describe('flatten', function() {
  it('should flatten an array', function() {
    flatten([1,2,3,[4,[[5]]],6]).should.deep.equal([1,2,3,4,5,6]);
  });
  
  it('should return back non array elements', function() {
    flatten(true).should.deep.equal(true);
  });
});