
//Global Variables

var userNum = 0;
var wins = 0;
var losses = 0;

var randomNum = Math.floor((Math.random() * 101) + 19);
var blue = Math.floor((Math.random() * 11) + 1);
var green = Math.floor((Math.random() * 11) + 1);
var red = Math.floor((Math.random() * 11) + 1);
var purple = Math.floor((Math.random() * 11) + 1);

var greenClick = document.getElementById("green-j");
var blueClick = document.getElementById("blue-j");
var purpleClick = document.getElementById("purple-j");
var redClick = document.getElementById("red-j");
var resetClick = document.getElementById("btns");

var userGuess = document.getElementById("user-num").innerHTML = userNum;



function startGame() {

    randomNum;
    blue;
    green;
    red;
    purple;

    console.log("RANDOM NUMBER: " + randomNum + ".");
    console.log("green gem: " + green);
    console.log("blue: " + blue);
    console.log("red: " + red);
    console.log("purple: " + purple);

    var cpNum = document.getElementById("cp-num").innerHTML = randomNum;
};


greenClick.onclick = function () {
    userNum = userNum + green;
    document.getElementById("user-num").innerHTML = userNum;
}
blueClick.onclick = function () {
    userNum = userNum + blue;
    document.getElementById("user-num").innerHTML = userNum;
}
redClick.onclick = function () {
    userNum = userNum + red;
    document.getElementById("user-num").innerHTML = userNum;
}
purpleClick.onclick = function (){
    userNum = userNum + purple;
    document.getElementById("user-num").innerHTML = userNum;
}


function winnLose(){

    if(userNum == randomNum){
        alert("You win!");
        wins++;
        document.getElementById("wins").innerHTML = wins;
        startGame(); 
    }
    if(userNum > randomNum){
        alert("You Lose!");
        losses++;
        document.getElementById("losses").innerHTML = losses;
        startGame();
    }
}

resetClick.onclick = function reseting(){

    startGame();
    document.getElementById("wins").innerHTML = "0";
    document.getElementById("losses").innerHTML = "0";

}

startGame();

/* check why it is not working
$("#purple-j").click(function () {
    userNum = userNum + purple;
    $("#user-num").html(userNum);
})
*/


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