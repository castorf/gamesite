//Load the library for file i/o in Node JS
const fs = require('fs');

var fname = 'map_locations.js'
//console.log('Hello world')
// Read the file into a Buffer 'data'
data = fs.readFileSync(fname)
// process the buffer as javascript to execute.
eval(data.toString('ascii'))
 // Now we have locations!


var fname = 'map_locations.js'
// Read the file into a Buffer 'data'
data = fs.readFileSync('circletest.js')
eval(data.toString('ascii'))
