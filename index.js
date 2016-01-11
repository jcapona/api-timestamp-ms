/*
var net = require('net');

var port = 5000;

var server = net.createServer(function(socket){
    var date = new Date();
    var month = Number(date.getMonth())+1 < 10? "0"+(Number(date.getMonth())+1).toString() : (Number(date.getMonth())+1).toString();
    var day = Number(date.getDate()) < 10? "0"+date.getDate() : date.getDate();
    socket.end(date.getFullYear()+"-"+month+"-"+day+" "+date.getHours()+":"+date.getMinutes());
    console.log(socket);
});

server.listen(port);
*/

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'jade');

app.get("/", function(request, response) {
  response.render("index");
});

app.get("/:date", function(request, response) {
  var date = request.params.date;
  console.log(date);
  response.render("index",{"quote":date});
});

app.listen(app.get('port'));


