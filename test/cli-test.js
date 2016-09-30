'use strict';
const assert = require('chai').assert;
var exec = require('child-process-promise').exec;

var commands =[
  './bin/capcoin -h',
  './bin/capcoin coins -h',
  './bin/capcoin front -h',
  './bin/capcoin global -h',
  './bin/capcoin history -h',
  './bin/capcoin map -h',
  './bin/capcoin page -h',
  './bin/capcoin charts -h',
  './bin/capcoin live -h',
  './bin/capcoin changelog -h',
];

describe('capcoin', function() {

  it('executes help', function(done) {

    function execAndDone(command){
      return exec(command).catch(done);
    }

    commands = commands.map(execAndDone);
    Promise
      .all(commands)
      .then(function (result) {
          result.map(assert.ok);
          done();
      }).catch(done);
  }).timeout(5000);
});
