// 


var winCount = 0;
var lossCount = 0;
var guessCount = 0;
var guessRemaining = 9;
var guessSoFar = [ ];

// var game = {
//     winCount: 0,
//     lossCount: 0,
//     guessCount: 0,
//     guess
// }

var alphabet = "abcdefghijklmnopqrstuvwxyz"

// capture user choice 
document.onkeyup = function () {
    userGuess = event.key.toLowerCase();
    var randomletter = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (userGuess === randomletter) {
        winCount++;
        guessRemaining = 9;
        document.querySelector('#wins').innerHTML = winCount;
        document.querySelector('#guessesleft').innerHTML = guessRemaining;
        // alert("equal");
    }
    else {
        guessRemaining--;
        document.querySelector('#guessesleft').innerHTML = guessRemaining;
        guessSoFar.push(userGuess);
        document.querySelector('#guessamount').innerHTML = guessSoFar;
        // alert("not equal");
    }
    if (guessRemaining === 0) {
        lossCount++;
        guessSoFar =[];
        guessRemaining = 9;
        document.querySelector('#guessamount').innerHTML = guessSoFar;
        document.querySelector('#guessesleft').innerHTML = guessRemaining;
        document.querySelector('#loss').innerHTML = lossCount;
        alert("That was your last guess")
    };


    console.log(guessSoFar);
    console.log(userGuess)
    console.log(randomletter)
    console.log(winCount)
    console.log(guessRemaining)
}



// Capture user choice 
// select random character from a-z 
// compare the user choice and randomly generated character 
// if choice is the same win count goes up by 1
// if choices are different user can continue guessing up to 9 times
// loss count goes up by 1 after the 9th guess if user guess and random character is different
// User choice is added to the guess so far after each guess
// Guess count reduces by 1 after each guess 