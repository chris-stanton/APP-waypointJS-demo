
console.log("client.js sourced!");

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-two'),
  handler: function() {
    alertify.success("Success log message");
  }
});
