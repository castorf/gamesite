const fs = require('fs');
var fname = 'all_locations.json'
data = fs.readFileSync(fname)
var locations = JSON.parse(data)
