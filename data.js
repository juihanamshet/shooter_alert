var ItemSense = require('itemsense-node');
var f = require('fs')

function inList(needle,haystack)
{
    var count=haystack.length;
    for(var i=0;i<count;i++)
    {
        if(haystack[i]===needle){return true;}
    }
    return false;
}

var itemsenseConfig = {};  // Create itemsense config json object, or read one in
itemsenseConfig.username = '***';
itemsenseConfig.password = '*****';
itemsenseConfig.itemsenseUrl = 'http://10.248.101.225/itemsense'; // if connected to Drexel servers
var itemsense = new ItemSense(itemsenseConfig); // Instantiate new ItemSense instance
var epc_list = [];
i = 0;
itemsense.items.get().then(function(data) {
  while (i < 10) {
    epc_list.push(JSON.stringify(data.items[i]))
    i++;
    console.log(epc_list)
}

f.appendFile('ldata.txt', epc_list, function(err)
{
  if (err) throw err;
  console.log('saved!')
})
});

http.createServer(function (req, res) {
    f.readFile('scratch.html', function(err, d) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(d);
        res.end();
    });
}).listen(8080);
