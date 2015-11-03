
var fs = require('fs');
var filename = process.argv[2];

module.exports = {

	print: function(filename) {
		fs.readFile(filename, function(err, data) {
			if (err) {
				console.log("can't read file " , filename, err);
			} else {
				console.log(data.toString());
			}
		});
	}
};
// add file read and print code
// wrap it up in a function
// export that function as `print`