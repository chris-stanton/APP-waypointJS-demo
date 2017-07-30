
console.log("client.js sourced!");

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-two'),
  handler: function() {
    alertify.success("<div class='alertImages'>" + "<div>Success log message</div>" +
                      "<img src='../public/assets/images/fire.ico'>" + "</div>");
  }
});
