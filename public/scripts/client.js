
console.log("client.js sourced!");

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-one'),
  handler: function(direction) {
    alertify.log("Minneapolis, MN");
  },
  // offset: 400
})

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-two'),
  handler: function(direction) {
    alertify.log("St.paul, MN");
  },
  offset: 200
})

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-three'),
  handler: function(direction) {
    alertify.log("Minneapolis, MN");
  },
  offset: 200
})

var waypoint = new Waypoint({
  element: document.getElementById('section-four'),
  handler: function(direction) {
    // alertify is need
    alertify
    .closeLogOnClick(true)
    .log("<a href='#section-one'><div>  TOP <img src='../public/assets/images/arrow-up.ico'></div></a>")
  },
  offset: 400
})



// alertify.success("<div> Waypoint Two </div>");
