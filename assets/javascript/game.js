
//Global Variables

var userNum = 0;
var wins = 0;
var losses = 0;

// declared globally
var blue;
var green;
var red;
var purple;
var randomNum;


var greenClick = document.getElementById("green-j");
var blueClick = document.getElementById("blue-j");
var purpleClick = document.getElementById("purple-j");
var redClick = document.getElementById("red-j");
var resetClick = document.getElementById("btns");



// FUNCTIONS



function startGame() {

    // assign value local scope
    userNum = 0;
  
    var userGuess = document.getElementById("user-num").innerHTML = userNum;
    var cpNum = document.getElementById("cp-num").innerHTML = randomNum;

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

    
};



function winnLose() {
    console.log("winnlose fired!");
    // not working

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
    // not reseting
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




/*function () {

    userNum = userNum + green;

}

*/

//greenClick.onclick = alert("hi");


// function greenGem () {

//     userNum = userNum + green;




// }





  /*  //check to start at 19
    var randomNum = Math.floor((Math.random() * 101) + 19);
    var blue = Math.floor((Math.random()*11)+1);
    var green = Math.floor((Math.random() * 11) + 1);
    var red = Math.floor((Math.random() * 11) + 1);
    var purple = Math.floor((Math.random() * 11) + 1);

   // $("#green-j").val(green("value", green);
   //$("#green-j").on("click", green);
    //$("#user-num").html("click", green);

    console.log("RANDOM NUMBER: " + randomNum + ".");
    console.log("green gem: " + green);
    console.log("blue: "+ blue);
    console.log("red: " + red);
    console.log("purple: " + purple);

    //checking if jQuery is working
    //
    $("#cp-num").html(randomNum);
    */