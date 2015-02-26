var http = require('http');

// get all the urls passed in
var urlsArray = process.argv.slice(2);

// use an array to store the results by index
var responses = [];

// add counter to keep track of completed requests
var done = 0;

var printResults = function () {
	for (var i = 0; i < responses.length; i++) console.log(responses[i]);
};

var httpGet = function(index) {
	var url = urlsArray[index];

	http.get(url, function (response) {
		var dataString = '';

		response.on('data', function(data) {
			dataString += data;
		});

		response.on('end', function() {
			responses[index] = dataString;
			done++;	
			if (done === 3) {
				printResults();
			}
		});

	}).on('error', function (err) {
		// error is on the request not the response
		console.error(err);
	});
}

for (var i = 0; i < urlsArray.length; i++) {
	httpGet(i);
}