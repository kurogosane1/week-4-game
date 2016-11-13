//designate the variables for this game//
//the program has to generate a number for the user to reach//
//numbers have to be generated for the pictures once //
//function has to be generated where the score is stored and added on to with each click by the user//
//if statements have to be created if the user reaches the score needed to win the game, then a alert is poped up saying that he got it right//
//if the score is higher then the loss score is added otherwise the win score is added
$(document).ready(function () {
    var userScore = 0;
    var target;
    var win = 0;
    var loss = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    var operator = "";
    //initializing the crystal values that would be clicked upon//
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
    //This is to randomly generate numbers for the user to acheive his the goal//
    function targetScore() {
        target = Math.floor(Math.random() * 120) + 19;
        $('#number').append(target);
    }
    //This is the way for the function to recognize the buttons as a clickable function and then make the scores possible.//
    // Note to self: using a class did not seem to create any result and thus had to resort to creating individual clicks for this to work//
    function clickable(){
    $('#firstcrystal').on("click", function () {
        userScore = userScore + crystal1;
        $('#score').html(userScore);
        test();

    })
    $('#seccrystal').on("click", function () {
        userScore = userScore + crystal2;
        $('#score').html(userScore);
        test();

    })
    $('#thirdcrystal').on('click', function () {
        userScore = userScore + crystal3;
        $('#score').html(userScore);
        test();
    })
    $('#fourcrystal').on('click', function () {
        userScore = userScore + crystal4;
        $('#score').html(userScore);
        test();
    })

    }

    //This function tests the scores and resets the score data for both the target score and the user score as well as the individual diamond values//
//    This is incase the user wins//
    function test(){
    if (userScore === target) {
        alert("Congratulations you've won");
        win++;
        $('#win').html(win);
        target = null;
        targetScore();
        $(document).getElementById("score").reset();
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
    }
//        this is incase the user loses//
    if (userScore > target) {
        alert("Sorry you've lost");
        location.reload();
        loss++;
        $('#loss').html(loss);
        target = 0;
        targetScore();
        $(document).getElementById("#score").reset();
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
    }
//        This is let the program to continue on functioning if the scores don't reach the above requirements//
    else{
        clickable();
    }
    }
    targetScore();
    clickable();

});
