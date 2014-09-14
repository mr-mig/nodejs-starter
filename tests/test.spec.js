var should = require('./base-test').should;
var idx = require('../index');

describe('Basic test example', function () {
  it('#should.be.true ', function () {
    var a = true;
    a.should.be.true;
  });

  it('#should.not.exist', function () {
    var und = null;
    should.not.exist(und);
  });

  it('#deleteMe should exist', function(){
  	idx.deleteMe.should.exist; 
  	idx.deleteMe();
  })
});