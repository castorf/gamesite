 console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))
var collected = Object.entries(locations)

find = function(searchX, searchY, radius, keyword) {
  var radSqrd = radius*radius
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
            //results.appendChild(document.createTextNode(objecter.display_name))
          }
          console.log(yabloc[x]);
          //results.appendChild(document.createTextNode(' ' + yabloc[x]));
          counteer = true
        }
      }
    }
  }
};
find(0,0,9000,"Malanya")
