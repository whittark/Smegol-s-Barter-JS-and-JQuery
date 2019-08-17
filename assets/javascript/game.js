

// DISPLAY
// Four crystals as buttons
// A random number 
// The user's score 
// Instructions


// CRYSTALS
// Four crystals display on the screen
// A random 'hidden' value between 1 - 12 is assigned to each crystal at game play 
// A listener event is associated with each crystal for mouse clicks


// RANDOM NUMBER
// A random number is generated between 19- 120

var minNumber = 19;    
var maxNumber = 120;

gameNumber = Math.floor((Math.random() * maxNumber) + minNumber);
             
//console.log(gameNumber);

// The value is added to #randomNumber in the html with jQuery

$("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");

$("#gamenum").html(randomNumber);



// USER SCORE
// The game score starts at 0
// The game score increments by the value of the selected crystal


// GAME LOSS
// If the score exceeds the random number, the player loses


// GAME WIN
// If the score equals

