var btn = document.querySelector("#button");
var name = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");

function sendEmail() {
  var name = document.getElementById("name").value
  var email = document.getElementById("email").value
  var message = document.getElementById("message").value
  let text = ""
  console.log(name + "<br>" + email + "<br>" + message )
}