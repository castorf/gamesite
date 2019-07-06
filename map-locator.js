console.log(Object.keys(locations).length)
// console.log(data.toString('utf8'))
var searchButton = document.getElementById('searchButton');
var pushed = function() {
  console.log('starting...')
  var results = document.getElementById('objects')
  var keyword = document.getElementById('keyword').value
  var searchX = Number(document.getElementById('x').value)
  var searchY = Number(document.getElementById('y').value)
  var size = Number(document.getElementById('size').value)
  results.innerHTML = find(searchX, searchY, size, keyword);
}
searchButton.addEventListener('click', pushed);
