const fs = require('fs');
var prependFile = require('prepend-file');

prependFile(__dirname + '../dist/grapesjs-blocks-bootstrap4-1.min.js', '/* eslint-disable */', function (err) {
	if (err) {
		console.log(err);
	}

	// Success
	console.log('Prepended eslint successfully');
});