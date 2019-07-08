 console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))
var button = document.getElementById('searchButton');
var collected = Object.entries(locations)

 button.onclick = function() {
  console.log('starting...')
  var results = Number(document.getElementById('objects'))
  var keyword = document.getElementById('keyword').value
  var searchX = Number(document.getElementById('x').value)
  var searchY = Number(document.getElementById('y').value)
  var radius = document.getElementById('radius').value
  var radSqrd = radius*radius
  results.innerHTML = ''
  find(searchX, searchY, radius, keyword);
  if (results.innerHTML === '') {
    console.log("no objects found");
  }
}
find = function(searchX, searchY, size, keyword) {
  for (var y = 0; y < collected.length; y++) {
    var objecter= collected[y][1]
    if (objecter.display_name.search(keyword) > -1) {
      var yabloc = objecter.locations
      var counteer = false
      for (var x = 0; x < yabloc.length; x++) {
        var xDist = searchX - yabloc[x][0]
        var yDist = searchY - yabloc[x][1]
        var distSqrd = (xDist * xDist) + (yDist * yDist)
        if (distSqrd < radSqrd) {
          if (counteer == false) {
            console.log(objecter.display_name)
            results.appendChild(document.createTextNode(objecter.display_name))
          }
          console.log(yabloc[x]);
          results.appendChild(document.createTextNode(' ' + yabloc[x]));
          counteer = true
        }
      }
    }
  }
};
