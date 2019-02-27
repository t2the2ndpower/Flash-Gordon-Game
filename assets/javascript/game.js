// My cool crafty guess game.  aka "A Festival of Console Logs!"



// (Game Notes:  Game is not yet complete and the following need to be added)
//  - hide the answers but keep the hint visible
//  - on button press call the random index function and generate another hidden answer
//  - remove the keypresses outside of the input box
//  - total the wins and losses
//  - hide the congratulatory message
//  - update the congratulatory message



// Game Variables (wip)

        var wins = 0;  // the number of times the user guesses correctly

        var loses = 0;  // the number of times the user guesses incorrectly

        var initKeyPress = Math.floor(Math.random()*4); // the inital key press to get the game started

        var playerKeyPress; // all of the keypresses the player presses during a single guess. This needs to be cleared out after a successfull guess or player has run out of attempts.

        var gameRound; // may not be needed, but, this variable will hold the current game round index (is this round 1, 2, 3 ,4 etc)

        var magicNum = Math.floor(Math.random()*99);

        //var pctpic = gameAnswers[0].pctpic;

        //initKeyPress = var randomGameAnswers = gameAnswers[compIndexItem].pctname;

        //var randomGameAnswers = gameAnswers[compIndexItem].pctname;


/*            
**************************************

the answers that should be randomly selected by index by the game, this version tries to create and array with objects in it, didn't seem to work so I created a series of individual objects that were named x1, x2, x3 etc.  It was painful. so glad I don't have to use that idea. 

MY IDEA ABOUT OBJECTS IN AN ARRAY WAS ACTUALLY VALID!  WOOOOHOOO, WON'T HE DO IT! THANKS STERLING!  

I was using a () instead of a [] when referencing each index item. smh. 
I also had a mix of lower and upper case object properties from copying and pasting the wrong thing.

*/

        var gameCards = [
        {
            cardName: 'Flash',
            cardTitle: "assets/images/flashgordon1.jpg",
            cardEffect:"The mica shift is a very simple technique that yields incredible results. It works with polymer clay that has mica in it,  first you align the mica particles in the clay and later disturb them to produce very interesting effects. My favorite effect is the 3D optical illusion that you get when you use a stamp; the clay appears to have depth, while being completely flat. It's a very interesting optical illusion that is fun both make and watch.",
            cardID: "c1",
            cardNum: 0
        },
        {
            cardName: 'Dale',
            cardTitle: "assets/images/flashgordon2.jpg",
            cardEffect:"The mica shift is a very simple technique that yields incredible results. It works with polymer clay that has mica in it,  first you align the mica particles in the clay and later disturb them to produce very interesting effects. My favorite effect is the 3D optical illusion that you get when you use a stamp; the clay appears to have depth, while being completely flat. It's a very interesting optical illusion that is fun both make and watch.",
            cardID: "c2",
            cardNum: 0
        },
        {
            cardName: 'Baron',
            cardTitle: "assets/images/flashgordon3.jpg",
            cardEffect:"The mica shift is a very simple technique that yields incredible results. It works with polymer clay that has mica in it,  first you align the mica particles in the clay and later disturb them to produce very interesting effects. My favorite effect is the 3D optical illusion that you get when you use a stamp; the clay appears to have depth, while being completely flat. It's a very interesting optical illusion that is fun both make and watch.",
            cardID: "c3",
            cardNum: 0
        },
        {
            cardName: 'Hawk',
            cardTitle: "assets/images/flashgordon5.jpg",
            cardEffect:"The mica shift is a very simple technique that yields incredible results. It works with polymer clay that has mica in it,  first you align the mica particles in the clay and later disturb them to produce very interesting effects. My favorite effect is the 3D optical illusion that you get when you use a stamp; the clay appears to have depth, while being completely flat. It's a very interesting optical illusion that is fun both make and watch.",
            cardID: "c4",
            cardNum: 0
        },
        {
            cardName: 'Ming',
            cardTitle: "assets/images/flashgordon5.jpg",
            cardEffect:"The mica shift is a very simple technique that yields incredible results. It works with polymer clay that has mica in it,  first you align the mica particles in the clay and later disturb them to produce very interesting effects. My favorite effect is the 3D optical illusion that you get when you use a stamp; the clay appears to have depth, while being completely flat. It's a very interesting optical illusion that is fun both make and watch.",
            cardID: "c5",
            cardNum: 0
        }
        
        ];

   // console.log(gameAnswers[compIdxItem].pctName);     


//  make a function that randomly generate a number to pass into the gamdCards.cardNum  property  
//          I think there should be an easy way to reference the number of items in an array

        function getCardNums(){

              for(var i=0; i<6; i++){

             

    var compIdxItem = Math.floor((Math.random() * gameAnswers.length));

    console.log("randomly generated index number is " + compIdxItem);

    console.log(gameAnswers[compIdxItem].pctName.split([]));  
    } 


}



//  WORKING: Randomly generated number successfully passes through to  randomGameAnsers var and returns a random item from the gameAnswers array of objects

    // var randomGameAnswers = gameAnswers[compIdxItem].pctName;
    //console.log(randomGameAnswers);

        var randomGameAnswers = gameAnswers[compIdxItem];

    console.log(randomGameAnswers);



// WORKING: count the number of characters in a pctName

        var pctNameChars = Math.floor(gameAnswers[compIdxItem].pctName.length);

    console.log(pctNameChars);



// WORKING: create a sting of underscores based on the number kept pctNameChars that represents the number of characters to be guessed


        
        var pctNameBlanks = [];

            var i;

                for (i = 0; i < gameAnswers[compIdxItem].pctName.length; i++) {

                    pctNameBlanks[i] = "_";
                }

    console.log(pctNameBlanks)

// WORKING: show the underscores in the html

        var agpUpdate = document.getElementById("activeGamePlay");

            agpUpdate.innerHTML = pctNameBlanks;

    console.log(agpUpdate);


// change the underscores to correctly guessed letters



/*

NONE of my attempts worked :-( so I got with Stephan which introduced the idea of doing it all in the loop that looks through the 'split' array

function changeLetters(){

    if ( pctNameChars = )

     var agpLetters = document.getElementById("activeGamePlay");
        agpLetters.innerHTML = 

}
*/
       




// sort of WORKING: show the gameplayers keystrokes (need to get them to appear in a row and not overwrite eachother)

//WORKING: capturing the key press and showing them on screen albeit one at a time

//var playerKeyPress;

/* var allKeysPressed = [];

        document.onkeypress = function (k){

        var playerKeyPress = k;

    console.log(playerKeyPress);

        allKeysPressed.push(playerKeyPress);

        //var allKeysPressed = [playerKeyPress];
           // allKeysPressed.push(playerKeyPress);

    console.log(allKeysPressed);

        //document.getElementById("userGuessChar").innerHTML = allKeysPressed;

        }

//allKeysPressed.push(playerKeyPress);        
document.getElementById("userGuessChar").innerHTML =allKeysPressed;
*/

//WORKING:  Turn the randomly selected game answer name into an indexed array
    
        var gameAnswerString = gameAnswers[compIdxItem].pctName.toLowerCase().split('');''
        
    console.log(gameAnswers[compIdxItem].pctName.toLowerCase())



    console.log("these are all of the characters of the randomly generated answer " + gameAnswerString);


//WORKING:  Create an input area that displays the gameplayers keypresses

        const keyPress = document.querySelector("input");

        const log = document.getElementById("show");

            keyPress.onkeydown = logKey;



// Stephan helped me to get this working! (previously not working):  having the guessed keystrokes decrement the total number of guesses available

        function logKey(e) {

            log.append(e.key);

            pctGuesAvail --;
            
    console.log(pctGuesAvail);
       
            keyStrokeUpdate.innerHTML = pctGuesAvail;

                for(var i = 0; i<gameAnswerString.length; i++){

    console.log("this is the letter!");

                    if (e.key == gameAnswerString[i])  {

                        pctNameBlanks[i] = e.key;

    console.log("this is the letter!", gameAnswerString[i]);
                
                    }

                }

// Stephan helped me undersand 'join'.  Here we join the newly updated pctBlanks var into a string

                pctNameBlanks.join("")

    console.log(pctNameBlanks.join(""))

                agpUpdate.innerHTML = pctNameBlanks.join("");

                if ( pctNameBlanks.join("") === gameAnswers[compIdxItem].pctName.toLowerCase()) {

    console.log("youWIN!");

                }

        }

   

/*

More code snippets and ideas
********************************

*
function myFunction() {
    var str = "Visit W3Schools!"; 
    var n = str.search("W3Schools");
    document.getElementById("demo").innerHTML = n;
  }

*/

/*

split string values

"Hello world!".split('')
["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]


Replace String Values

var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");

********************************

            From JJ...

            const input = document.querySelector('input');
            const log = document.getElementById('show');

            input.onkeydown = logKey;

            function logKey(e) {
            log.append(e.key);


********************************

            From JJ...

            arrayOfKeys = [];

            document.onkeypress = function (k){
            var playerKeyPress = k;
            console.log(playerKeyPress);

	        //add keypress to array
	        arrayOfKeys.push(playerKeyPress);
            }
*********************************

            From W3Schools

           var node = document.createElement("LI");                 // Create a <li> node
           var textnode = document.createTextNode("Water");         // Create a text node
           node.appendChild(textnode);                              // Append the text to <li>
           document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList" 

************************************
going to try putting all of this in a 'while' loop: didn't work
************************************



var pctGuesAvail = Math.floor(pctNameChars * 2.5);

console.log(pctGuesAvail);

        var i = 1

        while (i < pctGuesAvail) {

            document.onkeypress = function (k){

                var playerKeyPress = k.key;

//                var allKeysPressed;

//                allKeysPressed.push(playerKeyPress);

                console.log(playerKeyPress);

//                document.getElementById("userGuessChar").innerHTML = allKeysPressed;
            }

            i++;

        }

**************************************
going to try a for loop 
**************************************



        for (var i = 1; i < 5; i++) {


    console.log("this is my loop, ");

        }

*/


// WORKING: calculate the number of guesses given per round.  It should be 2.5x the number of characters to be guessed 

        var pctGuesAvail = Math.floor(pctNameChars * 2.5);

    console.log(pctGuesAvail);

// WORKING: show pctGuessAvail in html

        var keyStrokeUpdate = document.getElementById("remainingKeystrokes");

            keyStrokeUpdate.innerHTML = pctGuesAvail;

    console.log(keyStrokeUpdate);



// has game player guessed it correctly within the given guess allotment? (this is just some copy pasted code for a while loop)
/*
        while (i < 10) {
            text += "The number is " + i;
            i++;
        }
*/
// WORKING: display wins variable in the html page

        var winsUpdate = document.getElementById("wins")

            winsUpdate.innerHTML = wins;

// WORKING: display losses variable in the html page

        var lossesUpdate = document.getElementById("losses")

            lossesUpdate.innerHTML = loses;


// WORKING: Display obj infor in the html page

        var pctTitleUpdate = document.getElementById("mstTitle");

            pctTitleUpdate.innerHTML = gameAnswers[compIdxItem].pctName;

    console.log(pctTitleUpdate);

        var pctDescUpdate = document.getElementById("mstDesc");

            pctDescUpdate.innerHTML = gameAnswers[compIdxItem].pctDesc;

    console.log(pctDescUpdate);

        var pctPicUpdate = document.getElementById("mstPic");

            pctPicUpdate.src = gameAnswers[compIdxItem].pctPic;

    console.log(pctPicUpdate);

        var pctTeaseUpdate = document.getElementById("questionTease");

            pctTeaseUpdate.innerHTML = gameAnswers[compIdxItem].pctTease;
            
    console.log(pctTeaseUpdate);

// WORKING: Hide 'Thanks for Playing' message till game is over    

        var hideUpdate = document.getElementById("thanks");

            hideUpdate.innerHTML = "";    


// Hide congrats message







// Begin Psudo Code **********************************
       

// on first key press generate a random index number and hold it in a variable to use as the first index item to guess

// present the related Object properties associated with the previously randomly generated index number

// create a line of underscores that match the number of characters of the name randomly guessed technique value.

// on subsequent key presses log them in an array variable, 

// present the array of charicters generated by the player's keypress on the screen to the player

// also present, from the same array, values from the array that match the winning technique name as a replacement for the underscores.

// create a variable to hold the winning guesses

// create a variable to hold the loosing guesses

// create a variable to hold the total number of guesses allowed per guess

// after the alotted number of allowed guesses has been reached AND there are still remaining un solved letters, add 1 point to the loosing variable

// if the technique had been successfully guessed before the alloted number of guseese have been used, add 1 point to the winning variable and present an alert or button moving on to the next technique,

// once all the techniques have been guessed, Display the wins and losses and end the game. 




/* Code Notes and snippets

*************************


-------------------

var name = 'JJ Harry';

            // pre es6 concatenation
            console.log('The best person ever is '+ name);

            // es6 template literals
            console.log(`The best person ever is ${name}`);



-------------------

my pre-defined html id's

<p id="userGuessChar">Letters that the game player has already used go here.</p>
<p id="remainingKeystrokes">Number of keystrokes left before the game player looses the game</p>
<p id="activeGamePlay">Underscores to be turned into correct letters as the game player presses down on keys</p>
<p id="wins">number of winning guesses</p>
<p id="losses">number of loosing guesses</p>
<p id="congrats">congratulatory messages go here.</p>

--------------------




*************************

End Code Notes  */

