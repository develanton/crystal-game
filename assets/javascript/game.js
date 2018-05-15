
//Global Variables

var randomNum = 0;
var userNum = 0;
var wins = 0;
var losses = 0;

var blue;
var green;
var red;
var purple;

var greenClick = document.getElementById("green-j");
var blueClick = document.getElementById("blue-j");
var purpleClick = document.getElementById("purple-j");
var redClick = document.getElementById("red-j");
var resetClick = document.getElementById("btns");

// FUNCTIONS



function startGame() {

    // assign value local scope
    userNum = 0;
  
    
    blue = Math.floor((Math.random() * 11) + 1);
    green = Math.floor((Math.random() * 11) + 1);
    red = Math.floor((Math.random() * 11) + 1);
    purple = Math.floor((Math.random() * 11) + 1);
    randomNum = Math.floor((Math.random() * 101) + 19);

 
    console.log("RANDOM NUMBER: " + randomNum + ".");
    console.log("green gem: " + green);
    console.log("blue: " + blue);
    console.log("red: " + red);
    console.log("purple: " + purple);
    
    var userGuess = document.getElementById("user-num").innerHTML = userNum;
    var cpNum = document.getElementById("cp-num").innerHTML = randomNum;


    
};



function winnLose() {
    console.log("winnlose fired!");
    
    if (userNum == randomNum) {
        alert("You win!");
        wins++;
        document.getElementById("wins").innerHTML = wins;
        startGame();
    }
    if (userNum > randomNum) {
        alert("You Lose!");
        losses++;
        document.getElementById("losses").innerHTML = losses;
        startGame();
    }
}

// GAME LOGIC


greenClick.onclick = function () {   
    userNum = userNum + green;
    document.getElementById("user-num").innerHTML = userNum;
    winnLose();
}
blueClick.onclick = function () {
    userNum = userNum + blue;
    document.getElementById("user-num").innerHTML = userNum;
    winnLose();
}
redClick.onclick = function () {
    userNum = userNum + red;
    document.getElementById("user-num").innerHTML = userNum;
    winnLose();
}

purpleClick.onclick = function () {
    userNum = userNum + purple;
    document.getElementById("user-num").innerHTML = userNum;
    winnLose();
}



resetClick.onclick = function reseting() {
   
    startGame();
    document.getElementById("wins").innerHTML = "0";
    document.getElementById("losses").innerHTML = "0";

}

startGame();




// $("#purple-j").click(function () {
//     console.log('JQUERY WORKS')
//     userNum = userNum + purple;
//     $("#user-num").html(userNum);
// })



