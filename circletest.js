// console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))
objects = Object.values(locations)
find = function(searchX, searchY, rad, keyword) {
  var ret = []
  var radSqrd = rad * rad
  for (var objecter of objects) {
    // var objecter= objecteer[1]
    if (objecter.display_name.search(keyword) > -1) {
      ret.push(objecter)
      var yabloc = objecter.locations
      var counteer = false
      for (var point of yabloc) {
        var xDist = searchX - point[0]
        var yDist = searchY - point[1]
        var distSqrd = (xDist * xDist) + (yDist * yDist)
      //  console.log(distSqrd, point[0], point[1])
        if (distSqrd < radSqrd) {

        console.log(point[0]+", "+point[1]);
          counteer = true
        }
      }
    }
  }
  // return(ret)
};
find(0,0,9000, '.')
