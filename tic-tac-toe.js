// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn = "p1"
var topLeftTrack = 0;
var topMidTrack = 0;
var topRightTrack = 0;
var midLeftTrack = 0
var midMidTrack = 0
var midRightTrack = 0
var botLeftTrack = 0
var botMidTrack = 0
var botRightTrack = 0
//top left
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
  } else if(topLeftTrack == 0 && turn == "p2"){
    var canvas = document.getElementById("game-board")
    var XOne = document.createElementNS(namespace, "line")
    XOne.setAttribute("x1", 25)
    XOne.setAttribute("y1", 25)
    XOne.setAttribute("x2", 75)
    XOne.setAttribute("y2", 75)
    XOne.setAttribute("stroke-width", 2)
    XOne.setAttribute("stroke", "black")
    canvas.appendChild(XOne)

    var XTwo = document.createElementNS(namespace, "line")
    XTwo.setAttribute("x1", 25)
    XTwo.setAttribute("y1", 75)
    XTwo.setAttribute("x2", 75)
    XTwo.setAttribute("y2", 25)
    XTwo.setAttribute("stroke-width", 2)
    XTwo.setAttribute("stroke", "black")
    canvas.appendChild(XTwo)
    topLeftTrack = 1
    turn = "p1"
  }
}
//end top left

function topMidClick(){
  if(topMidTrack == 0 && turn == "p1"){
    var canvas = document.getElementById("game-board")
  var circle2 = document.createElementNS(namespace, "circle")
  circle2.setAttribute("cx", 150)
  circle2.setAttribute("cy", 50)
  circle2.setAttribute("r", 30)
  canvas.appendChild(circle2)
  topMidTrack = 1
  turn = "p2"
} else if(topMidTrack == 0 && turn == "p2"){
    var canvas = document.getElementById("game-board")
    var XOne2 = document.createElementNS(namespace, "line")
    XOne2.setAttribute("x1", 125)
    XOne2.setAttribute("y1", 25)
    XOne2.setAttribute("x2", 175)
    XOne2.setAttribute("y2", 75)
    XOne2.setAttribute("stroke-width", 2)
    XOne2.setAttribute("stroke", "black")
    canvas.appendChild(XOne2)

    var XTwo2 = document.createElementNS(namespace, "line")
    XTwo2.setAttribute("x1", 125)
    XTwo2.setAttribute("y1", 75)
    XTwo2.setAttribute("x2", 175)
    XTwo2.setAttribute("y2", 25)
    XTwo2.setAttribute("stroke-width", 2)
    XTwo2.setAttribute("stroke", "black")
    canvas.appendChild(XTwo2)
    topMidTrack = 1
    turn = "p1"
  }
}
// end topmid

function topRightClick(){
  if(topRightTrack == 0 && turn == "p1"){
    var canvas = document.getElementById("game-board")
  var circle3 = document.createElementNS(namespace, "circle")
  circle3.setAttribute("cx", 250)
  circle3.setAttribute("cy", 50)
  circle3.setAttribute("r", 30)
  canvas.appendChild(circle3)
  topRightTrack = 1
  turn = "p2"
} else if(topRightTrack == 0 && turn == "p2"){
    var canvas = document.getElementById("game-board")
    var XOne3 = document.createElementNS(namespace, "line")
    XOne3.setAttribute("x1", 225)
    XOne3.setAttribute("y1", 25)
    XOne3.setAttribute("x2", 275)
    XOne3.setAttribute("y2", 75)
    XOne3.setAttribute("stroke-width", 2)
    XOne3.setAttribute("stroke", "black")
    canvas.appendChild(XOne3)

    var XTwo3 = document.createElementNS(namespace, "line")
    XTwo3.setAttribute("x1", 225)
    XTwo3.setAttribute("y1", 75)
    XTwo3.setAttribute("x2", 275)
    XTwo3.setAttribute("y2", 25)
    XTwo3.setAttribute("stroke-width", 2)
    XTwo3.setAttribute("stroke", "black")
    canvas.appendChild(XTwo3)
    topRightTrack = 1
    turn = "p1"
  }
}
//end topright

function midLeftClick(){
  if(midLeftTrack == 0 && turn == "p1"){
    var canvas = document.getElementById("game-board")
  var circle4 = document.createElementNS(namespace, "circle")
  circle4.setAttribute("cx", 50)
  circle4.setAttribute("cy", 150)
  circle4.setAttribute("r", 30)
  canvas.appendChild(circle4)
  midLeftTrack = 1
  turn = "p2"
} else if(midLeftTrack == 0 && turn == "p2"){
    var canvas = document.getElementById("game-board")
    var XOne4 = document.createElementNS(namespace, "line")
    XOne4.setAttribute("x1", 25)
    XOne4.setAttribute("y1", 125)
    XOne4.setAttribute("x2", 75)
    XOne4.setAttribute("y2", 175)
    XOne4.setAttribute("stroke-width", 2)
    XOne4.setAttribute("stroke", "black")
    canvas.appendChild(XOne4)

    var XTwo4 = document.createElementNS(namespace, "line")
    XTwo4.setAttribute("x1", 25)
    XTwo4.setAttribute("y1", 175)
    XTwo4.setAttribute("x2", 75)
    XTwo4.setAttribute("y2", 125)
    XTwo4.setAttribute("stroke-width", 2)
    XTwo4.setAttribute("stroke", "black")
    canvas.appendChild(XTwo4)
    midLeftTrack = 1
    turn = "p1"
  }
}
//end midleft

function midMidClick(){
  if(midMidTrack == 0 && turn == "p1"){
    var canvas = document.getElementById("game-board")
  var circle5 = document.createElementNS(namespace, "circle")
  circle5.setAttribute("cx", 150)
  circle5.setAttribute("cy", 150)
  circle5.setAttribute("r", 30)
  canvas.appendChild(circle5)
  midMidTrack = 1
  turn = "p2"
} else if(midMidTrack == 0 && turn == "p2"){
    var canvas = document.getElementById("game-board")
    var XOne5 = document.createElementNS(namespace, "line")
    XOne5.setAttribute("x1", 125)
    XOne5.setAttribute("y1", 125)
    XOne5.setAttribute("x2", 175)
    XOne5.setAttribute("y2", 175)
    XOne5.setAttribute("stroke-width", 2)
    XOne5.setAttribute("stroke", "black")
    canvas.appendChild(XOne5)

    var XTwo5 = document.createElementNS(namespace, "line")
    XTwo5.setAttribute("x1", 125)
    XTwo5.setAttribute("y1", 175)
    XTwo5.setAttribute("x2", 175)
    XTwo5.setAttribute("y2", 125)
    XTwo5.setAttribute("stroke-width", 2)
    XTwo5.setAttribute("stroke", "black")
    canvas.appendChild(XTwo5)
    midMidTrack = 1
    turn = "p1"
  }
}
//end midmid
