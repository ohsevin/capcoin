'use strict';
var commands = require('./lib/commands')();
var helpers = require('./lib/helpers');
module.exports = function(program){

  program.parse(process.argv);

  return {
    helpers,
    commands: commands,
    program: program
  }
}
