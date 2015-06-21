var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


//file get
app.get('/file', function(req, res){
	res.sendfile('index.html');
});

app.get('/apiFakefile', function(req, res){
	res.sendfile('fakeIndex.html');
});

// api get
app.get('/getContacts', function(req, res){
	var contactsArray = ['Jon', 'Daniel', 'Chloe'];
	var jsonString = JSON.stringify(contactsArray);
	console.log(jsonString);
	res.json(jsonString);
});

var server = app.listen(3000, function () {

  console.log('Listening to 3000');

});