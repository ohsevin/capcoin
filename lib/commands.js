var restify = require('restify');
var Table = require('cli-table2');
var client = restify.createJsonClient({
  url: 'http://socket.coincap.io/coins',
  version: '*'
});

module.exports = function() {
  return  {
    global: function() {
      var p = new Promise(function(resolve, reject) {
        client.get('/global', function(err, req, res, data) {
          if (err) {
            reject(err)
          }
          resolve(data);
        });
      });
      return p;
    }
  }
}
