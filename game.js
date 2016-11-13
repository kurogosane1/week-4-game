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
    function clickable(){
    $('#firstcrystal').on("click", function () {
        userScore = userScore + crystal1;
        $('#userresult').html(userScore);
        test();

    })
    $('#seccrystal').on("click", function () {
        userScore = userScore + crystal2;
        $('#userresult').html(userScore);
        test();

    })
    $('#thirdcrystal').on('click', function () {
        userScore = userScore + crystal3;
        $('#userresult').html(userScore);
        test();
    })
    $('#fourcrystal').on('click', function () {
        userScore = userScore + crystal4;
        $('#userresult').html(userScore);
        test();
    })

    }
    function test(){
    if (userScore === target) {
        alert("Congratulations you've won");
        win++;
        $('#win').html(win);
        target = 0;
        targetScore();
        $(document).getElementById("#userresult").reset();
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
    }
    if (userScore > target) {
        alert("Sorry you've lost");
        loss++;
        $('#loss').html(loss);
        target = 0;
        targetScore();
        $(document).getElementById("#userresult").reset();
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
    }
    else{
        clickable();
    }
    }
    targetScore();
    clickable();

});
