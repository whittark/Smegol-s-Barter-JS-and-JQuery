$(document).ready(function() {

	// ARRAYS FOR RANDOM GAME AND GEM NUMBERS

	// Generate random numbers for Smegol's Price between 19 and 120
	var gameNumber = [];

	for (var r = 19; r < 121; r++) {
		gameNumber.push(r);
	}

	// Generate random numbers for gems between 1 and 12
	var gems = [];

	for (var c = 1; c < 13; c++) {

		gems.push(c);
	}

	// GLOBAL VARIABLES

	// Declare Smegol's Price and gem value variables
	var randNumber; // Smegol's price
	var gemNumbers = []; // Gem values

	// Assigning gem numbers to variables for score incrementing
	var c1;
	var c2;
	var c3;
	var c4;

  	var score = 0; // What the player has paid set to 0 for game start

	var wins = 0; // Wins score set to 0 for game play
	var losses = 0; // Losses set to 0 for game play

	// FUNCTIONS

	// Select a random number for Smegol's Price
	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber); // Test random number

	} 

	// Select the hidden number for each gem
	function pickRandomGems(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			gemNumbers.push(a);
		}

		console.log("gem numbers: " + gemNumbers); // Test gem number

	}

	// Assign gem numbers

	function gemValues(arr) {

		// Select a different gem value for each gem per game
		// Iterate through array
		for (i = 0; i < arr.length; i++) {
		
		//jquery to assign the values for each gem button
		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} 

	// Reset game play upon winning or losing
	function gameReset(x) {

		gemNumbers = []; // Clear hidden gem numbers

		pickRandomNumber(gameNumber); // Select a new Smegol's Price

		pickRandomGems(gems); // Reset gem hidden values

		gemValues(gemNumbers);

		score = 0; // Reset Amount Paid to zero
		$("#totalNumber").html(score);

		alert(x); // Display win or loss alert
	} 

	// GAME START

	pickRandomNumber(gameNumber); // Select Smegol's price
	pickRandomGems(gems); // Assign hidden gem values
	gemValues(gemNumbers);

		// jquery listener for ruby click
		$("#button-1").on("click", function() {
			//Paid amount increments when ruby is clicked
			score += c1;
			$("#totalNumber").html(score);
		});
		// Paid amount increments upon diamond click
		$("#button-2").on("click", function() {
			score += c2;
			$("#totalNumber").html(score);
		});
		// Paid amount increments upon emerald click
		$("#button-3").on("click", function() {
			score += c3;
			$("#totalNumber").html(score);
		});
		// Paid amount increments upon saphire click
		$("#button-4").on("click", function() {
			score += c4;
			$("#totalNumber").html(score);
		});
	// If player wins: score === randNumber; player is alerted
	$("button").on("click", function() {
		if (score == randNumber) {
			wins++;
			console.log(score);
			$("#totalNumber").html(score);
			$("#wins").html("Wins: " + wins);

			setTimeout(function() {gameReset("You get your wish!")}, 200);
		}
		// If player loses: score < randNumber; player is alerted
		else if (score > randNumber){

			losses++;
			$("#totalNumber").html(score);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("You lose! Run quickly!")}, 200);
		}
	});

}); 
