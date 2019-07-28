const fs = require('fs');

var fname = 'zeldadungeonLocations.json'
//console.log('Hello world')
// Read the file into a Buffer 'data'
data = fs.readFileSync(fname)
var dungLocations = JSON.parse(data)
var zname = 'map_locations.js'
//console.log('Hello world')
// Read the file into a Buffer 'data'
data = fs.readFileSync(zname)
// process the buffer as javascript to execute.
eval(data.toString('ascii'))
var collected = Object.entries(locations)
objects = {
  name: 'Objects',
  source: "summary",
  layers: [{
    minZoom: 5,
    markers: []
  }]
}
for (x = 0; x < collected.length; x++) {
  var objName = collected[x][1].display_name
  var yabloc = collected[x][1].locations
  for (var y = 0; y < yabloc.length; y++) {
    var addedObj = {
      coords: [],
      id: "",
      name: '',
      link: ''
    }
    addedObj.coords.push(yabloc[y][0])
    addedObj.coords.push(yabloc[y][1])
    addedObj.id = objName + (y + 1)
    addedObj.name = objName
    addedObj.link = objName
    objects.layers[0].markers.push(addedObj)
  }
}
dungLocations.push(objects)
fs.writeFileSync("all_locations.json", JSON.stringify(dungLocations))
