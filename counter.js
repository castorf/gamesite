 console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))
var collected = Object.entries(locations)
var oneObjCount = 0
find = function() {
  for (var y = 0; y < collected.length; y++) {
    var objecter= collected[y][1]
    if (objecter.locations.length < 2) {
      oneObjCount += 1
    }
  }
  console.log(oneObjCount);
}
find();
