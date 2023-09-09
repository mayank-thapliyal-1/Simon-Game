let UserChosenPattern = [];
var gamePattern = [];
var buttoncolor = ["green", "red", "yellow", "blue"];
var count = 0;
var started = false;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("level " + count);
    nextsequece();
    started = true;
  }
});

$(".btn").click(function () {
  var UserChosenColor = $(this).attr("id");
  UserChosenPattern.push(UserChosenColor);
  console.log(UserChosenPattern);

  playsound(UserChosenColor);
  animatepress(UserChosenColor);

  checkAnswer(UserChosenPattern.length-1);
  console.log(UserChosenPattern.length-1)
});

function checkAnswer(currentvalue) {
  if (gamePattern[currentvalue] === UserChosenPattern[currentvalue]) {
   if (gamePattern.length === UserChosenPattern.length) {
      console.log("succcess");
      setTimeout(function () {
        nextsequece();
      }, 1000);
    }
  }

   else {
     playsound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game over , Press Any Key to Start")
    setTimeout(function () {
      $("body").removeClass("game-over");
    },500);
    console.log("wrong");
    startover();
  }}

  function nextsequece() {
    UserChosenPattern = [];
    count++;
    $("#level-title").text("level " + count);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosencolor = buttoncolor[randomNumber];
    console.log(randomChoosencolor);
    gamePattern.push(randomChoosencolor);
    console.log(gamePattern);
    $("#" + randomChoosencolor)
      .fadeIn(500)
      .fadeOut(500)
      .fadeIn(500);
    playsound(randomChoosencolor);
  }
  function animatepress(currentcolor) {
    $("#" + currentcolor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentcolor).removeClass("pressed");
    }, 100);
  }

  function playsound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
function startover(){
gamePattern=[];
count = 0;
started=false;
}