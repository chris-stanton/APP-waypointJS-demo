
console.log("client.js sourced!");

// var waypoint = new Waypoint({
//   element: document.getElementById('waypoint-two'),
//   handler: function() {
//     alertify.success("<div> Waypoint Two </div>");
//   }
// });

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-two'),
  handler: function(direction) {
    alertify.log("Waypoint Two");
  },
  offset: 400
})



// alertify.success("<div> Waypoint Two </div>");
