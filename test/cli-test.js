'use strict';
const assert = require('chai').assert;
var exec = require('child-process-promise').exec;



var commands = './bin/capcoin -h';

describe('capcoin', function() {

  it('executes main help', function(done) {
    exec(commandMain)
      .then(function (result) {
          var stdout = result.stdout;
          var stderr = result.stderr;
          assert.ok(stdout);
          assert.notOk(stderr);
          done();
      })
      .catch(done);
  }).timeout(5000);




});
