//Load the library for file i/o in Node JS
const fs = require('fs');
var fname = 'map_locations.js'
// Read the file into a Buffer 'data'
data = fs.readFileSync(fname)
// process the buffer as javascript to execute.
eval(data.toString('ascii'))
 // Now we have locations!
 console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))
var collected = Object.entries(locations)
var keyword = document.getElementById('keyword').value
var searchX = document.getElementById('x').value
var searchY = document.getElementById('y').value
var size = document.getElementById('size').value
for (var y = 0; y < collected.length; y++) {
  var objecter= collected[y][1]
  if (objecter.display_name.search(keyword) > -1) {
    var yabloc = objecter.locations
    var counteer = false
    for (var x = 0; x < yabloc.length; x++) {
      if (searchX < yabloc[x][0] && searchX + size > yabloc[x][0] && searchY < yabloc[x][1] && searchY + size > yabloc[x][1]) {
        if (counteer == false) {
          console.log(objecter.display_name)
        }
        console.log(yabloc[x]);
        counteer = true
      }
    }
  }
}
