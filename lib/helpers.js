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
  'horizontalTable': function(input) {
    var res = [];
    var keys = Object.keys(input[0]);
    var table = new Table({head: keys});
    input.map(function(item){
      table.push([item.name, item.symbol, item.aliases.join(',')])
    })
    console.log(table.toString());
  },
  'json': function(input) {
    console.log(JSON.stringify(input));
  }
};
