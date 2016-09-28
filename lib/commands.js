var restify = require('restify');
var Table = require('cli-table2');
var client = restify.createJsonClient({
  url: 'http://socket.coincap.io/coins',
  version: '*'
});

function getRequest(url) {
  var p = new Promise(function(resolve, reject) {
    client.get(url, function(err, req, res, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
  return p;
}


module.exports = function() {
  return  {
    global: function() {
      return getRequest('/global');
    },
    coins: function() {
      return getRequest('/coins');
    },
    coinsXcp: function() {
      return getRequest('/coins/xcp');
    },
    coinsXcpAll: function() {
      return getRequest('/coins/xcp/all');
    },

    map: function() {
      return getRequest('/map');
    }
  };
};
