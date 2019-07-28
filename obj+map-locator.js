 console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))

find = function(searchX, searchY, radius, keyword) {
  var lastSeen = ""
  var radSqrd = radius*radius
  for (var y = 0; y < locations.length; y++) {
    var objs = locations[y].layers[0].markers
    for (var x = 0; x < objs.length; x++) {
      var obj = objs[x]
      var xDist = searchX - obj.coords[0]
      var yDist = searchY - obj.coords[1]
      var distSqrd = (xDist * xDist) + (yDist * yDist)
      if (distSqrd < radSqrd) {
        if (obj.name.search(keyword) > -1) {
          if (lastSeen!=obj.name) {
            console.log(obj.nane);
          }
          console.log(obj.coords);
        }
        //if (counteer == false) {
          //console.log(objecter.display_name)
          //results.appendChild(document.createTextNode(objecter.display_name))
        //}
        //console.log(yabloc[x]);
        //results.appendChild(document.createTextNode(' ' + yabloc[x]));
        //counteer = true
      }
      lastSeen = obj.name
    }
  }
};
find(0,0,9000,"Malanya")
