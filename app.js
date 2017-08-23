var express = require('express');
var cons = require('consolidate');
var app = express();

// assign the jade engine to .jade files
app.engine('jade', cons.jade);
// set .jade as the default extension
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('*', function(req, res){
  res.render('index', {
    domain: req.hostname,
    ga: process.env.GA
  });
});

var port = process.env.PORT || 3000

var server = app.listen(port, function () {
  var port = server.address().port;

  console.log('Parked Domain app listening at port %s', port);
});
