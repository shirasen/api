var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var db;


var hosts = [
{
	ip: '192.168.1.2',
	name: 'test7'
},
{
	ip: '192.168.1.4',
	name: 'test2'
}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
	res.send('Hellos3');
})

app.get('/hosts', function(req, res) {
	res.send(hosts);
})

app.post('/hosts', function(req, res) {
	var host = {
		ip: Date.now(),
		name: req.body.name
	};
	hosts.push(host);
	res.send(host);
});

app.listen(process.env.PORT || 5000, function() {
	console.log('server started');
})