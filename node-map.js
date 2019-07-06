// Load the library for file i/o in Node JS
const fs = require('fs');
var fname = 'map_locations.js'
// Read the file into a Buffer 'data'
data = fs.readFileSync(fname)
// process the buffer as javascript to execute.
eval(data.toString('ascii'))
// Now we have locations!

eval(fs.readFileSync('find.js').toString('ascii'));

console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))

 console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))
// var searchButton = document.getElementById('searchButton');
var pushed = function() {
  console.log('starting...')
  var results = {'innerHTML': ''} //document.getElementById('objects')
  var keyword = 'Guardian' //document.getElementById('keyword').value
  var searchX = -50 // document.getElementById('x').value
  var searchY = -50 // document.getElementById('y').value
  var size = 100 // document.getElementById('size').value
  results.innerHTML = find(searchX, searchY, size, keyword);
}
// searchButton.addEventListener('click', pushed);
pushed()
