var wordBank = ["kale", "broccoli", "cauliflower", "celery", "beet", "radish", "zuccini", "beans", "onion", "spinach", "arugala", "cabbage", "carrot", "tomato"];
    var current= "";
    var letters = [];
    var underScore = 0;
    var correct = [];
    var incorrect = [];

    var wins = 0;
    var losses = 0;
    var guessesRemaining = 9;


    document.onkeyup = function(event) {
        var guess = String.fromCharCode(event.keyCode).toLowerCase();
        letterCheck(guess);
        round();
    
        console.log(guess);
    }




function begin() {
    current = wordBank[Math.floor(Math.random() * wordBank.length)];
    letters = current.split("");
    underScore = letters.length;

    guessesRemaining =  9;
    incorrect = [];
    correct = [];

    for (var i=0 ; i<underScore; i++){
        correct.push("_");
    }

    document.getElementById("wordToGuess").innerHTML= correct.join(" ");
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
}


    function letterCheck(letter) {

        var matchingLetter = false;

        for (var i=0; i<underScore; i++){
            if (current[i] == letter) {
                matchingLetter = true;
            }
        }
    if(matchingLetter) {
        for (var i=0; i<underScore; i++) {
            if(current[i] == letter) {
                correct[i] = letter;
            }
        }    
    }
    else {
        incorrect.push(letter);
        guessesRemaining--
    }
    console.log(correct);
}

function round(){

   document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
   document.getElementById("wordToGuess").innerHTML = correct.toString();
   document.getElementById("pickedLetters").innerHTML = incorrect;


    if (letters.toString() == correct.toString()){
        wins++;
        alert("Good Job!");
        document.getElementById("wins").innerHTML = wins;
        

        begin();
    }

    else if (guessesRemaining == 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("pickedLetters").innerHTML = "";
        alert("Game Over!")
        
        begin();

    }
}

begin();



