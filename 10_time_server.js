var net = require('net');
var port = process.argv[2];

var pad = function(number)
{
	if (number < 10)
		return '0' + number;
	return number;
}

var formatDate = function(date) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();

	return year + '-' + pad(month) + '-' + pad(day) + ' ' + pad(hours) + ':' + pad(minutes);
};

var server = net.createServer(function(socket) {
	socket.end(formatDate(new Date()) + '\n');
});

server.listen(port);