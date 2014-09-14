// setup chai
var chai = require('chai');
chai.use(require('chai-as-promised'));
// turn on stack trace inclusion
chai.config.includeStack = true;
// init expect extension
exports.expect = require('chai').expect;
// init should extension
exports.should = require('chai').should();
