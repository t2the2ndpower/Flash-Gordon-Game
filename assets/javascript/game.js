// My Fabulous Flash Gordon Game aka an outstanding assortment of id references!


//thinks yet to be fixed

// my awesome background image

// my awesome background music

// my awesome critical hit card play sound effects



// Game Variables (wip)

var wins = 0;  // the number of times the user guesses correctly

var losses = 0;  // the number of times the user guesses incorrectly

var initKeyPress = Math.floor(Math.random() * 4); // the inital key press to get the game started

var playerKeyPress; // all of the keypresses the player presses during a single guess. This needs to be cleared out after a successfull guess or player has run out of attempts.

var gameRound; // may not be needed, but, this variable will hold the current game round index (is this round 1, 2, 3 ,4 etc)

var magicNum = Math.floor(Math.random(1) * 800); //150

var cardPtsPlayed = 0;

var cardTotalPts = 0;




/*            
**************************************



*/

// WORKING as is: Click to start the game and generate the random number to add up to

$("#startBtn").click(function () {
    $("#gameStartDiv").show();
    $("#magicNum").html("<h2>Can you make it to " + magicNum + " with out going over?!?!?</h2>");
    //    $("playComm").show();
    //    $("#image").show();
    // $("btn").replaceWith("btn-secondary"); wanted to change the button from the primary class to secondary class on mouseclick, oh well
    $("#startBtn").toggleClass("btn-secondary btn-lg");
    $("#startBtn").html("reset game");

    // Updated the total number of points played as each card is clicked

    // $("#cardPts").html(cardPtsPlayed);

});

// WORKING:  If statement that controls the loosing and winning P tags and adds a point for each round won or loss

function winOrLose() {

    if (magicNum == cardPtsPlayed) {

        $("#playNews").html("<h2>The Good Guys Win!!!</h2> this battle, but will they win the war?  Play again to find out.");

        wins++;

        magicNum = Math.floor(Math.random(1) * 800);

        cardPtsPlayed = 0;

        $("#magicNum").html("<h2>Can you NOW make it to " + magicNum + " with out going over?!?!?</h2>");

        $("#gameStats").html(wins + " Wins vs " + losses + " Losses");

        getCardNums();

    } else if (magicNum < cardPtsPlayed) {
        $("#playNews").html("<h2>Ming has won the battle!  Oh the HUMANITY!!!</h2> Play another round to see if you can win the WAR!");

        losses++;

        magicNum = Math.floor(Math.random(1) * 800);

        cardPtsPlayed = 0; // this doesn't actually show the 0 but on the next click shows the amount of the first click

        $("#magicNum").html("<h2>Can you NOW make it to " + magicNum + " with out going over?!?!?</h2>");

        $("#gameStats").html(wins + " Wins vs " + losses + " Losses");

        getCardNums();

        console.log("FAIL");

    } else {

        $("#playNews").html("<h2>keep up the good work, you can do it!</h2>");

        console.log("win!");

    }
};


//  if statement that controls if the game has been one or not

function winOrLoseGame() {

    if (wins == 5) {

        $("#playNews").html("<h1> YOU'VE WON THE WAR!!! THE UNIVERS IS SAFE</h1> We reward you for being the hero you are! Have some cocoa and a nap on us, you deserve it!")

        $("#cardPlayed").html("");

        $("#imageRow").hide();

        $("#cardPts").hide();

        $("#thanks").html("Thanks for playing!")

    } else if (losses == 5) {

        $("#playNews").html("<h1> THE UNIVERS HAS JUST BEEN HANDEDED OVER TO THE RED CAPED SCURGE CALLD MING</h1> How can you live with yourself! Your sister will now be forced into hard labor in the swamp fields of the prison planet. YOU SUCK!!!")

        $("#cardPlayed").html("");

        $("#imageRow").hide();

        $("#cardPts").hide();

        $("#thanks").html("Thanks for playing!")

    } else { }

};



// WORKING: an array of game card objects to be played, along with their associated properties.


var gameCards = [
    {
        cardName: 'Flash',
        cardTitle: "assets/images/flashgordon1.jpg",
        cardEffect: "The mica shift is a very simple technique that yields incredible results. It works with polymer clay that has mica in it,  first you align the mica particles in the clay and later disturb them to produce very interesting effects. My favorite effect is the 3D optical illusion that you get when you use a stamp; the clay appears to have depth, while being completely flat. It's a very interesting optical illusion that is fun both make and watch.",
        cardID: "c1",
        cardSkill: "Mighty",
        cardNum: 0,
        cardTotalPts: 0
    },
    {
        cardName: 'Dale',
        cardTitle: "assets/images/flashgordon2.jpg",
        cardEffect: "The mica shift is a very simple technique that yields incredible results. It works with polymer clay that has mica in it,  first you align the mica particles in the clay and later disturb them to produce very interesting effects. My favorite effect is the 3D optical illusion that you get when you use a stamp; the clay appears to have depth, while being completely flat. It's a very interesting optical illusion that is fun both make and watch.",
        cardID: "c2",
        cardSkill: "Fierce",
        cardNum: 0,
        cardTotalPts: 0
    },
    {
        cardName: 'Baron',
        cardTitle: "assets/images/flashgordon3.jpg",
        cardEffect: "The mica shift is a very simple technique that yields incredible results. It works with polymer clay that has mica in it,  first you align the mica particles in the clay and later disturb them to produce very interesting effects. My favorite effect is the 3D optical illusion that you get when you use a stamp; the clay appears to have depth, while being completely flat. It's a very interesting optical illusion that is fun both make and watch.",
        cardID: "c3",
        cardSkill: "Bombastic",
        cardNum: 0,
        cardTotalPts: 0
    },
    {
        cardName: 'Hawk',
        cardTitle: "assets/images/flashgordon5.jpg",
        cardEffect: "The mica shift is a very simple technique that yields incredible results. It works with polymer clay that has mica in it,  first you align the mica particles in the clay and later disturb them to produce very interesting effects. My favorite effect is the 3D optical illusion that you get when you use a stamp; the clay appears to have depth, while being completely flat. It's a very interesting optical illusion that is fun both make and watch.",
        cardID: "c4",
        cardSkill: "Hurtful",
        cardNum: 0,
        cardTotalPts: 0
    },
    {
        cardName: 'Ming',
        cardTitle: "assets/images/flashgordon5.jpg",
        cardEffect: "The mica shift is a very simple technique that yields incredible results. It works with polymer clay that has mica in it,  first you align the mica particles in the clay and later disturb them to produce very interesting effects. My favorite effect is the 3D optical illusion that you get when you use a stamp; the clay appears to have depth, while being completely flat. It's a very interesting optical illusion that is fun both make and watch.",
        cardID: "c5",
        cardSkill: "Mercilous",
        cardNum: 0,
        cardTotalPts: 0
    }

];

//console.log("game cards are " + (gameCards.cardID));     


//  make a function that randomly generate a number to pass into the gamdCards.cardNum  property  
//          I think there should be an easy way to reference the number of items in an array

// WORKING as is

function getCardNums() {

    for (var i = 0; i < gameCards.length; i++) {

        gameCards[i].cardNum = Math.floor((Math.random() * 100));

        console.log("randomly generated card number for  " + gameCards[i].cardName + " is " + gameCards[i].cardNum);


        //return gameCards[i];


    }

}

getCardNums();

// WORKING as is:   display the value of the cardNum on click - a bit klugie.  I know there is a way to do this with variables but I couldn't figure it out so I just had to use ID's for everything.  My goal was to complete a working homework assignment. 

$("#c1").click(function () {

    //    $("#thisCardNum1").html(gameCards[0].cardNum);
    $("#cardPts").html(gameCards[0].cardNum);

    cardPtsPlayed = cardPtsPlayed + gameCards[0].cardNum;

    console.log(cardPtsPlayed + " pts total, after " + gameCards[0].cardName + " has been clicked");

    $("#cardPts").html("<h2>" + cardPtsPlayed + " points played so far...</h2>");

    $("#cardPlayed").html(gameCards[0].cardName + " has struck a " + gameCards[0].cardSkill + " BLOW!!!");

    winOrLose();

    winOrLoseGame();

});

$("#c2").click(function () {

    //    $("#thisCardNum2").html(gameCards[1].cardNum);
    $("#cardPts").html(gameCards[1].cardNum);

    cardPtsPlayed = cardPtsPlayed + gameCards[1].cardNum;
    console.log(cardPtsPlayed + " pts total, after " + gameCards[1].cardName + " has been clicked");

    $("#cardPts").html("<h2>" + cardPtsPlayed + " points played so far...</h2>");

    $("#cardPlayed").html(gameCards[1].cardName + " has struck a " + gameCards[1].cardSkill + " BLOW!!!");

    winOrLose();

    winOrLoseGame();

});

$("#c3").click(function () {

    //    $("#thisCardNum3").html(gameCards[2].cardNum);
    $("#cardPts").html(gameCards[2].cardNum);

    cardPtsPlayed = cardPtsPlayed + gameCards[2].cardNum;
    console.log(cardPtsPlayed + " pts total, after " + gameCards[2].cardName + " has been clicked");

    $("#cardPts").html("<h2>" + cardPtsPlayed + " points played so far...</h2>");

    $("#cardPlayed").html(gameCards[2].cardName + " has struck a " + gameCards[2].cardSkill + " BLOW!!!");

    winOrLose();

    winOrLoseGame();

});

$("#c4").click(function () {

    //    $("#thisCardNum4").html(gameCards[3].cardNum);
    $("#cardPts").html(gameCards[3].cardNum);

    cardPtsPlayed = cardPtsPlayed + gameCards[3].cardNum;
    console.log(cardPtsPlayed + " pts total, after " + gameCards[3].cardName + " has been clicked");

    $("#cardPts").html("<h2>" + cardPtsPlayed + " points played so far...</h2>");

    $("#cardPlayed").html(gameCards[3].cardName + " has struck a " + gameCards[3].cardSkill + " BLOW!!!");

    winOrLose();

    winOrLoseGame();

});

$("#c5").click(function () {

    //    $("#thisCardNum5").html(gameCards[4].cardNum);
    $("#cardPts").html(gameCards[4].cardNum);

    cardPtsPlayed = cardPtsPlayed + gameCards[4].cardNum;
    console.log(cardPtsPlayed + " pts total, after " + gameCards[4].cardName + " has been clicked");

    $("#cardPts").html("<h2>" + cardPtsPlayed + " points played so far...</h2>");

    $("#cardPlayed").html(gameCards[4].cardName + " has struck a " + gameCards[4].cardSkill + " BLOW!!!");

    winOrLose();

    winOrLoseGame();

});




/*

  HTML id's used

"cardPlayed" references the the next next to xxx has struck!
"magicNum"
"startBtn"
"gameStats"
"cardPts"




                    // *************************

                    // End Code Notes

*/