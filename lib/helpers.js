var Table = require('cli-table2');
module.exports = {
  'verticalTable': function(input) {
      var table = new Table();
      var keys = Object.keys(input);
      keys.map(function(name){
        var item = {};
        item[name] = input[name];
        table.push(item);
      });
      console.log(table.toString());
  },
  'horizontalTable': function(input) {
    var keys = Object.keys(input[0]);
    var table = new Table({head: keys});
    input.map(function(item){

      var tableContent = [];
      var keys = Object.keys(item);
      keys.map(function(name) {

        var store = item[name];
        if (store.length && store.join) {
          store = store.join(', ');
        }

        tableContent.push(store);
      });
      table.push(tableContent);
    });
    console.log(table.toString());
  },
  'json': function(input) {
    console.log(JSON.stringify(input));
  }
};
