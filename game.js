//colours of each button
var buttonColours = [
    "red",
    "blue",
    "green",
    "yellow"
];


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence(){

    userClickedPattern = [];

    level++; //every time the next sequence starts, new level goes up
    $("#level-title").text("Level " + level)
    var randomNumber =  Math.floor((Math.random() * 4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //jQuery to make button flash
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");

    setTimeout(function (){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        if(userClickedPattern.length === gamePattern.length){
            //call next sequence after a 1s delay
            setTimeout(function () {
                nextSequence()
            }, 1000);
        }
    }else{
        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}


function startOver(){
        level = 0;
        gamePattern = [];
        started = false;
}



