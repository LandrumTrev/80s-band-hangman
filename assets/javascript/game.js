// JavaScript for Word Guess Game aka Hangman: 80s Bands
// by Rich Trevillian August 17 2018

// VARIABLES TO INITIALIZE ON PAGE LOAD

// START RANDOM GAME OBJECT VARIABLES

// create an array to hold individual band info objects
let bandsArray = [

    {
        name: ["A", "-", "H", "A"],
        photo: "<img src='assets/images/aha.jpg'>",
        mp3: "<audio controls autoplay src='assets/music/aha.mp3'></audio>",
        song: "<em>'The Sun Always Shines On TV'</em> by <strong>a-ha</strong>"
    },

    {
        name: ["T", "H", "E", " ", "P", "O", "L", "I", "C", "E"],
        photo: "<img src='assets/images/thepolice.jpg'>",
        mp3: "<audio controls autoplay src='assets/music/thepolice.mp3'></audio>",
        song: "<em>'Spirits In The Material World'</em> by <strong>The Police</strong>"
    },

    {
        name: ["R", "U", "S", "H"],
        photo: "<img src='assets/images/rush.jpg'>",
        mp3: "<audio controls autoplay src='assets/music/rush.mp3'></audio>",
        song: "<em>'Red Barchetta'</em> by <strong>Rush</strong>"
    },

    {
        name: ["S", "T", "E", "V", "I", "E", " ", "N", "I", "C", "K", "S"],
        photo: "<img src='assets/images/stevienicks.jpg'>",
        mp3: "<audio controls autoplay src='assets/music/stevienicks.mp3'></audio>",
        song: "<em>'Blue Lamp'</em> by <strong>Stevie Nicks</strong>"
    },

    {
        name: ["B", "O", "B", " ", "M", "A", "R", "L", "E", "Y"],
        photo: "<img src='assets/images/bobmarley.jpg'>",
        mp3: "<audio controls autoplay src='assets/music/bobmarley.mp3'></audio>",
        song: "<em>'Small Axe'</em> by <strong>Bob Marley and the Wailers</strong>"
    },

    {
        name: ["T", "H", "E", " ", "C", "L", "A", "S", "H"],
        photo: "<img src='assets/images/theclash.jpg'>",
        mp3: "<audio controls autoplay src='assets/music/theclash.mp3'></audio>",
        song: "<em>'Lost In The Supermarket'</em> by <strong>The Clash</strong>"
    },

    {
        name: ["M", "A", "R", "V", "I", "N", " ", "G", "A", "Y", "E"],
        photo: "<img src='assets/images/marvingaye.jpg'>",
        mp3: "<audio controls autoplay src='assets/music/marvingaye.mp3'></audio>",
        song: "<em>'Sexual Healing'</em> by <strong>Marvin Gaye</strong>"
    },

    {
        name: ["B", "I", "L", "L", "Y", " ", "I", "D", "O", "L"],
        photo: "<img src='assets/images/billyidol.jpg'>",
        mp3: "<audio controls autoplay src='assets/music/billyidol.mp3'></audio>",
        song: "<em>'Eyes Without A Face'</em> by <strong>Billy Idol</strong>"
    },

    {
        name: ["D", "U", "R", "A", "N", " ", "D", "U", "R", "A", "N"],
        photo: "<img src='assets/images/duranduran.jpg'>",
        mp3: "<audio controls autoplay src='assets/music/duranduran.mp3'></audio>",
        song: "<em>'The Reflex'</em> by <strong>Duran Duran</strong>"
    },

    {
        name: ["T", "H", "E", " ", "C", "A", "R", "S"],
        photo: "<img src='assets/images/thecars.jpg'>",
        mp3: "<audio controls autoplay src='assets/music/thecars.mp3'></audio>",
        song: "<em>'Drive'</em> by <strong>The Cars</strong>"
    },

];

// randomly select a band object from bandsArray
let bandChoice = bandsArray[Math.floor(Math.random() * bandsArray.length)];
// let bandChoice = bandsArray[0]; // PLACEHOLDER VALUE FOR DEV, REMOVE FOR PRODUCTION
// choose a random element from bandsArray[], which is an object with name, photo, mp3, song
// use to keep track of name, photo, mp3, and song name of current word

// set a variable for the band's name to be guessed
let wordChoice = bandChoice.name;
// let wordChoice = ["A", "-", "H", "A"];  // PLACEHOLDER VALUE FOR DEV, REMOVE FOR PRODUCTION
// get an Array of individual CAPITAL letters from .name of chosen bandsArray[bandChoice] object
// the Array used to compare right/wrong answers against for insertion into wordDisplay
document.getElementById("theBand").innerHTML = (wordChoice); // FOR DEV; display in winning()


//
// set a variable to display blanks equal in number to letters in the band's name
// this String's value to be updated by the play() function

// use .slice to make wordArray, an independent Array copy of values in wordChoice
let wordArray = wordChoice.slice();

// then use .slice to make wordDisplay, an independent copy of wordArray that will be turned into a String
let wordDisplay = wordArray.slice();

wordDisplay = wordDisplay.fill("_"); // use .fill to replace all array elements (letters) with "_"
wordDisplay = wordDisplay.join(" "); // use .join with space separator to turn array into a string
document.getElementById("theWord").textContent = (wordDisplay); // write the blanks to page SPAN
// let wordDisplay = ["_ _ _ _ "];
//


// set a variable for the band's photo to display on a win
// let bandPhoto = bandChoice.photo;
let bandPhoto = "<img src='assets/images/hangman.jpg'>"; // initial placeholder image for game
document.getElementById("thePhoto").innerHTML = (bandPhoto); // display the initial placeholder image
// get photo from the .photo of the current bandsArray[bandChoice] object

// set a variable for the band's song to play on a win
let bandMP3 = bandChoice.mp3;
// let bandMP3 = "<audio controls autoplay src='assets/music/aha.mp3'></audio>";
// document.getElementById("theMP3").innerHTML = (bandMP3); // FOR DEV; display in winning()
// get audio file from the .mp3 of the current bandsArray[bandChoice] object

// set a variable for the band's name and song title to display on a win
// let bandSongName = bandChoice.song;
let bandSongName = "<strong><em>Guess the name of the '80s band I'm thinking of, and you'll get a blast from the past!</em></strong>";
document.getElementById("theSongName").innerHTML = (bandSongName); // FOR DEV; display in winning()
// get text of song and band name from the .song of the current bandsArray[bandChoice] object

// END OF RANDOM GAME OBJECT VARIABLES


// START GAME PLAY VARIABLES

// initialize a Number variable for the number of remaining guesses the user has
let guessesRemaining; // declare guessesRemaining variable, value reset to 12 by reset()
guessesRemaining = 12; // initial value given to guessesRemaining on page load
// write the value of guessesRemaining to the #theRemaining span on page
document.getElementById("theRemaining").textContent = (guessesRemaining); // write to page

// initialize a String variable to be assigned to each key press the user makes
let userGuess; // initialize, set value in play() by DOCUMENT.ONKEYUP() {event.key.toUpperCase();}
userGuess = "a"; // PLACEHOLDER VALUE FOR DEV, REMOVE FOR PRODUCTION
document.getElementById("theGuess").textContent = (userGuess); // DISPLAY FOR DEV ONLY
// value is set in the DOCUMENT.KEYUP() function as event.key.toUpperCase()

// initialize an Array variable to hold a sequence of String values from userGuess
let lettersGuessed = []; // initialize, values of userGuess added to this array in play()
lettersGuessed = [" C", " H", " K", " Q"]; // PLACEHOLDER VALUES FOR DEV ONLY, REMOVE FOR PRODUCTION
document.getElementById("theGuesses").textContent = (lettersGuessed); // write blank array to page
// an Array, empty on page load and at reset()

// initialize a Number variable as a incremented counter to keep track of user wins
let wins = 0; // initialize, value incremented in the winning() function
// wins = 327; // PLACEHOLDER VALUE FOR DEV ONLY, REMOVE FOR PRODUCTION
document.getElementById("theWins").textContent = (wins); // write the value of wins to the page

// END OF GAME PLAY VARIABLES


// START FUNCTION EXPRESSIONS: reset, winning, play


// resets the game to a new random band either at end of winning(), or if guessesRemaining < 1
let reset = function () {

    // get a new random object from bandsArray
    bandChoice = bandsArray[Math.floor(Math.random() * bandsArray.length)];

    // get a new wordChoice Array from the .name of randomly chosen bandChoice object
    wordChoice = bandChoice.name;

    // make wordDisplay a String of blanks "_ _ _" with blanks equal to letters in wordChoice Array
    // use .slice to copy wordChoice values to wordDisplay without affecting wordChoice values later
    wordDisplay = wordChoice.slice();
    wordDisplay = wordDisplay.fill("_"); // use .fill to replace all array elements (letters) with "_"
    wordDisplay = wordDisplay.join(" "); // use .join with space separator to turn array into a string
    document.getElementById("theWord").textContent = (wordDisplay); // write the blanks to page SPAN

    // reassign the photo, mp3 and song name variables from the new random object
    // these items are hidden until the winning() function writes them to the page
    bandPhoto = bandChoice.photo;
    bandMP3 = bandChoice.mp3;
    bandSongName = bandChoice.song;

    // reset the number of guessesRemaining to 12
    guessesRemaining = 12;

    // empties the array of lettersGuessed
    lettersGuessed = [];
    // lettersGuessed = [" B", " H", " K", " Q"]; // PLACEHOLDER VALUES FOR DEV ONLY, REMOVE FOR PRODUCTION
    document.getElementById("theGuesses").textContent = (lettersGuessed); // write blank array to page

};

// shows band photo and song name, plays song, increases wins +1, and runs reset()
let winning = function () {

    // on a win, display the band photo, play the song, and display the band name + song title
    document.getElementById("thePhoto").innerHTML = (bandPhoto);
    document.getElementById("theMP3").innerHTML = (bandMP3);
    document.getElementById("theSongName").innerHTML = (bandSongName);

    // increment the wins variable by 1
    wins = wins + 1;
    document.getElementById("theWins").textContent = (wins); // write new value of wins to the page

    //run the reset() function to reset for a new game
    reset();
};


// the meat and potatoes of the logic tree that occurs when DOCUMENT.ONKEYUP fires
let play = function () {

    // create a loop that runs the length of lettersGuessed
    for (let i = 0; 0 < lettersGuessed.length; i++) {

        // if userGuess equals any letter in lettersGuessed array...
        if (userGuess === lettersGuessed[i]) {

            // then do nothing--end the function with return
            return;

            // but if userGuess letter pressed is not already in the lettersGuessed Array...
        } else {

            // loop through all elements in the secret wordChoice Array,
            for (let h = 0; 0 < wordChoice.length; h++) {

                // and if the user's key press matches any element in the wordChoice Array,
                if (wordChoice[h] === userGuess) {

                    // then .splice in 1 element (userGuess) into wordArray at position [h]
                    wordArray.splice([h], 1, userGuess);

                    // and then copy wordArray values into independent wordDisplay Array
                    wordDisplay = wordArray.slice();
                    // and then convert the wordDisplay Array into a space-separated String
                    wordDisplay = wordDisplay.join(" ");
                    // and then write updated wordDisplay String to the page
                    document.getElementById("theWord").textContent = (wordDisplay);

                    // and loop through the wordArray representing current state of guesses
                    for (let g = 0; 0 < wordArray.length; g++) {

                        // and if there are no any underscore "_" characters left...
                        if ( wordArray[g] !== "_";) {

                        // ...then run winning() to play song, show photo + song title, and reset()
                        winning();
                    }


                }




            };
        }
    };



    //     } else {
    //         lettersGuessed.push(userGuess); // add the userGuess to the array of letters already guessed
    //         write letters of lettersGuessed to# theGuesses div as individual spans;
    //         guessesRemaining = guessesRemaining - 1; // decrement the amount of guessesRemaining
    //         if (guessesRemaining < 1) { // and if the guessesRemaining hits 0,
    //             reset(); // then run reset to start another game
    //         } else {
    //             // otherwise, if guessesRemaining is NOT 0, then do nothing
    //         }
    //     }
    // }
};

// END OF FUNCTION EXPRESSIONS: reset, winning, play

// END OF VARIABLES INITIALIZATIONS



// START GAME PLAY TRIGGER FUNCTION

// when any key is lifted up after being pressed, the event is passed in as (event)
document.onkeyup = function (event) {

    // the value of the key press, converted to ALL UPPER CASE, is assigned to userGuess String variable
    userGuess = event.key.toUpperCase();

    // ...and also the play() function is triggered, which runs the game's decision logic tree
    play();

};

// END GAME PLAY TRIGGER FUNCTION