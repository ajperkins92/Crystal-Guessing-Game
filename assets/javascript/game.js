$(document).ready(function () {

    // Global Variables
    var wins = 0;
    var losses = 0;
    $("#winsDisplay").text(wins);
    $("#lossesDisplay").text(losses);


    // Target values
    var targetNumberValue = Math.floor(Math.random() * 100) + 19;
    $("#target-number").text(targetNumberValue);
    var yourNumberValue = 0;
   
    // Crystal values (these will change with each round)
   
    var blueCrystalValue = Math.floor(Math.random() * 12) + 1;
    var greenCrystalValue = Math.floor(Math.random() * 12) + 1;
    var orangeCrystalValue = Math.floor(Math.random() * 12) + 1;
    var redCrystalValue = Math.floor(Math.random() * 12) + 1;

    // Printing initial Crystal values, Target Number, and User Guess to console

    console.log("Target Number Value: " + targetNumberValue);
    console.log("Blue Crystal Value: " + blueCrystalValue);
    console.log("Green Crystal Value: " + greenCrystalValue);
    console.log("Orange Crystal Value: " + orangeCrystalValue);
    console.log("Red Crystal Value: " + redCrystalValue);
    console.log("User Guesses: " + yourNumberValue);


    // Click functions for Crystals
    $("#blue-crystal").on("click", function(){
        yourNumberValue = yourNumberValue + blueCrystalValue;
        $("#user-number").text(yourNumberValue);
        console.log("New user score is: " + yourNumberValue);
        winsAndLosses();
    });

    $("#green-crystal").on("click", function(){
        yourNumberValue = yourNumberValue + greenCrystalValue;
        $("#user-number").text(yourNumberValue);
        console.log("New user score is: " + yourNumberValue);
        winsAndLosses();
    });

    $("#orange-crystal").on("click", function(){
        yourNumberValue = yourNumberValue + orangeCrystalValue;
        $("#user-number").text(yourNumberValue);
        console.log("New user score is: " + yourNumberValue);
        winsAndLosses();
    });

    $("#red-crystal").on("click", function(){
        yourNumberValue = yourNumberValue + redCrystalValue;
        $("#user-number").text(yourNumberValue);
        console.log("New user score is: " + yourNumberValue);
        winsAndLosses();
    });


    // Reset Game Function

    function reset () {
        blueCrystalValue = Math.floor(Math.random() * 12) + 1;
        greenCrystalValue = Math.floor(Math.random() * 12) + 1;
        orangeCrystalValue = Math.floor(Math.random() * 12) + 1;
        redCrystalValue = Math.floor(Math.random() * 12) + 1;
        yourNumberValue = 0;
        targetNumberValue = Math.floor(Math.random() * 100) + 19;

        $("#target-number").text(targetNumberValue);
        $("#user-number").text(yourNumberValue);        

        console.log("Target Number Value: " + targetNumberValue);
        console.log("Blue Crystal Value: " + blueCrystalValue);
        console.log("Green Crystal Value: " + greenCrystalValue);
        console.log("Orange Crystal Value: " + orangeCrystalValue);
        console.log("Red Crystal Value: " + redCrystalValue);
        console.log("User Guesses: " + yourNumberValue);
    }

    // Wins and losses function
    function winsAndLosses() {
        if (yourNumberValue === targetNumberValue) {
            wins++;
            $("#winsDisplay").text(wins);
            alert("You Win!!");
            reset(); 
        }

        else if (yourNumberValue > targetNumberValue) {
            losses++;
            $("#lossesDisplay").text(losses);
            alert("You Lose!!");
            reset();
        }
    }
});