
console.log("client.js sourced!");

var waypoint = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function() {
    notify('Basic waypoint triggered');
    alert("Basic waypoint triggered");
  }
});
