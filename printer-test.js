var fs = require('fs');
var filename = process.argv[2];
var printer = require('./printer');

// ensure the print function exists on the printer module before calling it

if ( printer.print ) {
	printer.print(filename);
} else {
	console.log("ERROR: you haven't exported the print function from the printer.js file");
}