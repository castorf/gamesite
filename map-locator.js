//Load the library for file i/o in Node JS
//const fs = require('fs');
//var fname = 'map_locations.js'
//console.log('Hello world')
// Read the file into a Buffer 'data'
//data = fs.readFileSync(fname)
// process the buffer as javascript to execute.
//eval(data.toString('ascii'))
 // Now we have locations!
 console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))
var collected = Object.entries(locations)
var keyword = "Wall"
var searchX1 = -5000
var searchY1 = -5000
var searchX2 = 5000
var searchY2 = 5000
for (var y = 0; y < collected.length; y++) {
  var objecter= collected[y][1]
  if (objecter.display_name.search(keyword) > -1) {
    var yabloc = objecter.locations
    var counteer = false
    for (var x = 0; x < yabloc.length; x++) {
      if (searchX1 < yabloc[x][0] && searchX2 > yabloc[x][0] && searchY1 < yabloc[x][1] && searchY2 > yabloc[x][1]) {
        if (counteer == false) {
          console.log(objecter.display_name)
        }
        console.log(yabloc[x]);
        counteer = true
      }
    }
  }
}
