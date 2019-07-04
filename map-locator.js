 console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))
var searchButton = document.getElementById('searchButton');
var collected = Object.entries(locations)

var searchButton.onclick = function() {
  console.log('starting...')
  var results = document.getElementById('objects')
  var keyword = document.getElementById('keyword').value
  var searchX = document.getElementById('x').value
  var searchY = document.getElementById('y').value
  var size = document.getElementById('size').value
  results.innerHTML = ''
  find(searchX, searchY, size, keyword);
}
find = function(searchX, searchY, size, keyword) {
  for (var y = 0; y < collected.length; y++) {
    var objecter= collected[y][1]
    if (objecter.display_name.search(keyword) > -1) {
      var yabloc = objecter.locations
      var counteer = false
      for (var x = 0; x < yabloc.length; x++) {
        if (searchX < yabloc[x][0] && searchX + size > yabloc[x][0] && searchY < yabloc[x][1] && searchY + size > yabloc[x][1]) {
          if (counteer == false) {
            console.log(objecter.display_name)
            results.appendChild(document.createTextNode(objecter.display_name))
          }
          console.log(yabloc[x]);
          results.appendChild(document.createTextNode(' ' + yabloc[x]);
          counteer = true
        }
      }
    }
  }
};
