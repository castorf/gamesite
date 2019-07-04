 console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))
var searchButton = document.getElementById('searchButton');
var onclick = function() {
  console.log('starting...')
  var results = document.getElementById('objects')
  var collected = Object.entries(locations)
  var keyword = document.getElementById('keyword').value
  var searchX = document.getElementById('x').value
  var searchY = document.getElementById('y').value
  var size = document.getElementById('size').value
  find(searchX, searchY, size, keyword);
}
find = function(searchX, searchY, size, keyword) {
  console.log('x: '+searchX)
  console.log('y: '+searchY)
  console.log('size: '+size)
  console.log('keyword: '+keyword)
  for (var y = 0; y < collected.length; y++) {
    var objecter= collected[y][1]
    if (objecter.display_name.search(keyword) > -1) {
      var yabloc = objecter.locations
      var counteer = false
      for (var x = 0; x < yabloc.length; x++) {
        if (searchX < yabloc[x][0] && searchX + size > yabloc[x][0] 
            && searchY < yabloc[x][1] && searchY + size > yabloc[x][1]) {
          if (counteer == false) {
            console.log(objecter.display_name)
            results.innerHTML += objecter.display_name
          }
          console.log('object found')
          console.log(yabloc[x]);
          results.innerHTML += yabloc[x]
          counteer = true
        } else {
         console.log(objecter.display_name + 'not found')
        }
      }
    }
  }
};
searchButton.addEventListener('click', onclick);
