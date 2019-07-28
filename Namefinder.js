 console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))
var collected = Object.entries(locations)
find = function() {
  for (var y = 0; y < collected.length; y++) {
    var objecter= collected[y][1]
    if (objecter.display_name.match('Fairy')  1) {
      console.log(objecter);
    }
  }
}
find();
