
console.log("working");
var waypoint = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function(direction) {
    console.log('Scrolled to waypoint-one')
  }
})
