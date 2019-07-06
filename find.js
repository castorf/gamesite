//	console.log('x: ' + item[0] + ' y: ' + item[1]); // 2510 1527 100 Travelers
find = function(searchX, searchY, size, keyword) {
  var collected = Object.entries(locations)
    var results = ''
  console.log('x: '+searchX + " " + typeof(searchX))
  console.log('y: '+searchY)
  console.log('size: '+size)
  console.log('keyword: '+keyword)
  for (var y = 0; y < collected.length; y++) {
    var objecter= collected[y][1]
    if (objecter.display_name.search(keyword) > -1) {
      // console.log('match found')
      var yabloc = objecter.locations
      var counteer = false
      for (var x = 0; x < yabloc.length; x++) {
        if (searchX < yabloc[x][0] && searchX + size > yabloc[x][0] 
            && searchY < yabloc[x][1] && searchY + size > yabloc[x][1]) {
          if (counteer == false) {
            console.log(objecter.display_name)
            results += objecter.display_name
          }
          results += yabloc[x].toString() + '\n'
          counteer = true
        } else {
         // console.log(objecter.display_name + 'not found')
        }
      }
    }
  }
  console.log('results: ' + results)
  return(results);
};
