
console.log("client.js sourced!");

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-one'),
  handler: function(direction) {
    alertify.log("Log Alert");
  },
  // offset: 400
});

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-two'),
  handler: function(direction) {
    alertify.success("Success Alert");
  },
  offset: 200
});

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-three'),
  handler: function(direction) {
    alertify.error("Error Alert");
  },
  offset: 200
});

var waypoint = new Waypoint({
  element: document.getElementById('section-four'),
  handler: function(direction) {
    alertify.log("<div>" +
                    "<input id='input' type='text'>" +
                    "<button type='button' onclick='inputButton()'></button>" +
                 "</div>");
  },
  offset: 250
});

// button click listener
function inputButton (){
  var input = document.getElementById('input').value;
  console.log(input);
};

var waypoint = new Waypoint({
  element: document.getElementById('section-four'),
  handler: function(direction) {
    // alertify is need
    alertify
    .closeLogOnClick(true)
    .log("<a href='#section-one'><div> Click To Go <img src='../public/assets/images/arrow-up.ico'></div></a>")
  },
  offset: 400
});





// alertify.success("<div> Waypoint Two </div>");
