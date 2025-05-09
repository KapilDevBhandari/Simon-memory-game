var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;
var score = 0;

// Check if device is mobile
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Initialize game based on device type
if (isMobile) {
  $("#level-title").text("Tap Start to Play");
  $(".start-btn").show();
} else {
  $("#level-title").text("Press A Key to Start");
  $(".start-btn").hide();
}

// Start game with keyboard (desktop only)
$(document).keypress(function() {
  if (!started && !isMobile) {
    startGame();
  }
});

// Start game with button (mobile only)
$(".start-btn").click(function() {
  if (!started) {
    startGame();
  }
});

function startGame() {
  $("#level-title").text("Level " + level);
  nextSequence();
  started = true;
  if (isMobile) {
    $(".start-btn").hide();
  }
}

// Handle button clicks/touches
$(".btn").on("click touchstart", function(e) {
  e.preventDefault(); // Prevent double triggering on mobile
  if (!started) return;

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      score += level * 10;
      $("#score").text(score);
      $("#level-title").addClass("level-complete");
      setTimeout(function() {
        $("#level-title").removeClass("level-complete");
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    if (isMobile) {
      $("#level-title").html("Game Over! 😢<br>Tap Start to Try Again 🔄");
      $(".start-btn").show().text("Try Again");
    } else {
      $("#level-title").html("Game Over! 😢<br>Press Any Key to Try Again 🔄");
    }

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
  score = 0;
  $("#score").text(score);
  if (isMobile) {
    $(".start-btn").show().text("Start Game");
  }
}
