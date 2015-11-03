
var fs = require('fs');
var fileName = process.argv[2];


	fs.readFile(fileName, function(err, data) {
		if (err) {
			console.log("can't read file " , fileName, err);
		} else {
			console.log(data.toString());
		}
	});

// ...
// and much more