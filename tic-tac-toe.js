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
//track variables end
var topLeftScore = 0;
var topMidScore = 0;
var topRightScore = 0;
var midLeftScore = 0
var midMidScore = 0
var midRightScore = 0
var botLeftScore = 0
var botMidScore = 0
var botRightScore = 0
//score variables end

//begin win check
function winCheck(){
  if(topLeftScore == 1 && topMidScore == 1 && topRightScore == 1 ){
alert("Player One Wins!")
  }

  if(midLeftScore == 1 && midMidScore == 1 && midRightScore == 1 ){
    alert("Player One Wins!")
  }

  if(botLeftScore == 1 && botMidScore == 1 && botRightScore == 1 ){
    alert("Player One Wins!")
  }
//not done
  if(topLeftScore == 1 && botMidScore == 1 && botRightScore == 1 ){
    alert("Player One Wins!")
  }
  //not done
}

}

//end win check

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
  topLeftScore = 1
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
    topLeftScore = 2
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

  topMidScore = 1

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
    topMidScore = 2
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
  topRightScore = 1
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
    topRightScore = 2
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
  midLeftScore = 1
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
    midLeftScore = 2
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
  midMidScore = 1
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
    midMidScore = 2
    turn = "p1"
  }
}
//end midmid

function midRightClick(){
  if(midRightTrack == 0 && turn == "p1"){
    var canvas = document.getElementById("game-board")
  var circle6 = document.createElementNS(namespace, "circle")
  circle6.setAttribute("cx", 250)
  circle6.setAttribute("cy", 150)
  circle6.setAttribute("r", 30)
  canvas.appendChild(circle6)
  midRightTrack = 1
  midRightScore = 1
  turn = "p2"
} else if(midRightTrack == 0 && turn == "p2"){
    var canvas = document.getElementById("game-board")
    var XOne6 = document.createElementNS(namespace, "line")
    XOne6.setAttribute("x1", 225)
    XOne6.setAttribute("y1", 125)
    XOne6.setAttribute("x2", 275)
    XOne6.setAttribute("y2", 175)
    XOne6.setAttribute("stroke-width", 2)
    XOne6.setAttribute("stroke", "black")
    canvas.appendChild(XOne6)

    var XTwo6 = document.createElementNS(namespace, "line")
    XTwo6.setAttribute("x1", 225)
    XTwo6.setAttribute("y1", 175)
    XTwo6.setAttribute("x2", 275)
    XTwo6.setAttribute("y2", 125)
    XTwo6.setAttribute("stroke-width", 2)
    XTwo6.setAttribute("stroke", "black")
    canvas.appendChild(XTwo6)
    midRightTrack = 1
    midMidScore = 2
    turn = "p1"
  }
}
// end midRight

function botLeftClick(){
  if(botLeftTrack == 0 && turn == "p1"){
    var canvas = document.getElementById("game-board")
  var circle7 = document.createElementNS(namespace, "circle")
  circle7.setAttribute("cx", 50)
  circle7.setAttribute("cy", 250)
  circle7.setAttribute("r", 30)
  canvas.appendChild(circle7)
  botLeftTrack = 1
  botLeftScore = 1
  turn = "p2"
} else if(botLeftTrack == 0 && turn == "p2"){
    var canvas = document.getElementById("game-board")
    var XOne7 = document.createElementNS(namespace, "line")
    XOne7.setAttribute("x1", 25)
    XOne7.setAttribute("y1", 225)
    XOne7.setAttribute("x2", 75)
    XOne7.setAttribute("y2", 275)
    XOne7.setAttribute("stroke-width", 2)
    XOne7.setAttribute("stroke", "black")
    canvas.appendChild(XOne7)

    var XTwo7 = document.createElementNS(namespace, "line")
    XTwo7.setAttribute("x1", 25)
    XTwo7.setAttribute("y1", 275)
    XTwo7.setAttribute("x2", 75)
    XTwo7.setAttribute("y2", 225)
    XTwo7.setAttribute("stroke-width", 2)
    XTwo7.setAttribute("stroke", "black")
    canvas.appendChild(XTwo7)
    botLeftTrack = 1
    botLeftScore = 2
    turn = "p1"
  }
}
//end botleft

function botMidClick(){
  if(botMidTrack == 0 && turn == "p1"){
    var canvas = document.getElementById("game-board")
  var circle8 = document.createElementNS(namespace, "circle")
  circle8.setAttribute("cx", 150)
  circle8.setAttribute("cy", 250)
  circle8.setAttribute("r", 30)
  canvas.appendChild(circle8)
  botMidTrack = 1
  botMidScore = 1
  turn = "p2"
} else if(botMidTrack == 0 && turn == "p2"){
    var canvas = document.getElementById("game-board")
    var XOne8 = document.createElementNS(namespace, "line")
    XOne8.setAttribute("x1", 125)
    XOne8.setAttribute("y1", 225)
    XOne8.setAttribute("x2", 175)
    XOne8.setAttribute("y2", 275)
    XOne8.setAttribute("stroke-width", 2)
    XOne8.setAttribute("stroke", "black")
    canvas.appendChild(XOne8)

    var XTwo8 = document.createElementNS(namespace, "line")
    XTwo8.setAttribute("x1", 125)
    XTwo8.setAttribute("y1", 275)
    XTwo8.setAttribute("x2", 175)
    XTwo8.setAttribute("y2", 225)
    XTwo8.setAttribute("stroke-width", 2)
    XTwo8.setAttribute("stroke", "black")
    canvas.appendChild(XTwo8)
    botMidTrack = 1
    botMidScore = 2
    turn = "p1"
  }
}
//end botmid

function botRightClick(){
  if(botRightTrack == 0 && turn == "p1"){
    var canvas = document.getElementById("game-board")
  var circle9 = document.createElementNS(namespace, "circle")
  circle9.setAttribute("cx", 250)
  circle9.setAttribute("cy", 250)
  circle9.setAttribute("r", 30)
  canvas.appendChild(circle9)
  botRightTrack = 1
  botRightScore = 1
  turn = "p2"
} else if(botRightTrack == 0 && turn == "p2"){
    var canvas = document.getElementById("game-board")
    var XOne9 = document.createElementNS(namespace, "line")
    XOne9.setAttribute("x1", 225)
    XOne9.setAttribute("y1", 225)
    XOne9.setAttribute("x2", 275)
    XOne9.setAttribute("y2", 275)
    XOne9.setAttribute("stroke-width", 2)
    XOne9.setAttribute("stroke", "black")
    canvas.appendChild(XOne9)

    var XTwo9 = document.createElementNS(namespace, "line")
    XTwo9.setAttribute("x1", 225)
    XTwo9.setAttribute("y1", 275)
    XTwo9.setAttribute("x2", 275)
    XTwo9.setAttribute("y2", 225)
    XTwo9.setAttribute("stroke-width", 2)
    XTwo9.setAttribute("stroke", "black")
    canvas.appendChild(XTwo9)
    botRightTrack = 1
    botRightScore = 2
    turn = "p1"
  }
}
//end bot right
