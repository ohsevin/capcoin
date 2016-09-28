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
        return reject(err);
      }
      if (JSON.stringify(data) == "{}") {
        reject('Empty reply from server');
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
    front: function() {
      return getRequest('/front');
    },
    frontXcp: function() {
      return getRequest('/front/xcp');
    },
    page: function(symbol) {
      return getRequest('/page/'+symbol);
    },
    history: function(symbol, timeframe) {
      var url = '/history/'+symbol;
      if (timeframe != 'all') {
        url = '/history/'+timeframe+'/'+symbol;
      }
      return getRequest(url);
    },
    map: function() {
      return getRequest('/map');
    }
  };
};
