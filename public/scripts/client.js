
console.log("working");
var waypoint = new Waypoint({
  element: document.getElementById('waypoint-two'),
  handler: function(direction) {
    console.log('Scrolled to waypoint-one')
  }
})
