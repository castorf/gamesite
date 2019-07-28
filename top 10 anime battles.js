 console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))
var collected = Object.entries(locations)
var objCount = []
find = function() {
  for (var y = 0; y < collected.length; y++) {
    var objecter= collected[y][1]
    var objID = []
    objID.push(Number(objecter.locations.length))
    objID.push(objecter.display_name)
    objID.push(y)
    objCount.push(objID)
  }
  objCount = objCount.sort((a, b) => {return (b[0] - a[0])})
  for (var x = 0; x< Object.keys(locations).length; x++) {
    console.log((x+1) + ". " + objCount[x][1] + "    count: " + objCount[x][0]);
//    console.log(collected[(objCount[x][2])]);
//    console.log();
  }
};
find()
