var Table = require('cli-table2');
module.exports = {
  'verticalTable': function(input) {
      var table = new Table();
      var res = [];
      var keys = Object.keys(input);
      keys.map(function(name){
        var item = {};
        item[name] = input[name];
        table.push(item);
      });
      console.log(table.toString());
  },
  'horizontalTable': function() {

  },
  'json': function(input) {
    JSON.stringify(input);
  }
};
