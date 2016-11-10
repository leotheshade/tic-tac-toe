// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn = "p1"
var topLeftTrack = 0;

function topLeftClick(){
  if(topLeftTrack == 0 && turn == "p1"){
    var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 50)
  circle.setAttribute("cy", 50)
  circle.setAttribute("r", 30)
  canvas.appendChild(circle)
  topLeftTrack = 1
  turn = "p2"
  }
}
