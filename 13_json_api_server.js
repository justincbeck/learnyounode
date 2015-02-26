var http = require('http');
var url = require('url');
var port = process.argv[2];

var getBreakdown = function(rawData) {

	var date = new Date(rawData);

	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	return JSON.stringify({'hour': hours, 'minute': minutes, 'second': seconds});
}

var getEpochTime = function(rawData) {
	var millis = Date.parse(rawData);

	return JSON.stringify({'unixtime': millis});
}

var server = http.createServer(function(req, res) {

	var path = req.url.split('?')[0];
	var query = req.url.split('?')[1];

	switch(path) {
		case '/api/parsetime':
			var data = getBreakdown(query.split('=')[1]);
			res.end(data);
			break;
		case '/api/unixtime':
			var data = getEpochTime(query.split('=')[1]);
			res.end(data);
			break;
		default:
			break;
	} 
}).listen(port);