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

// initialize variables to be used in the play() function
let wordSplice;
let replaceItem;
let dups;


// randomly select an element (a band object) from bandsArray
let bandChoice = bandsArray[Math.floor(Math.random() * bandsArray.length)];




// wordChoice is an Array with the letters of the band name
let wordChoice = bandChoice.name;

// use .slice to make an independent copy of wordChoice which will remain an array
// wordArray here is an Array of letters that will become underscores of the band's name
let wordArray = wordChoice.slice();

// here is where wordArray becomes an Array filled with underscores
wordArray = wordArray.fill("_");

// use .slice to make wordDisplay which will be turned into a String
let wordDisplay = wordArray.slice();

// use .join with space separator to turn array into a string
wordDisplay = wordDisplay.join(" ");

// write the blanks to page SPAN
document.getElementById("theWord").textContent = (wordDisplay);




// set a variable for the band's photo to display on a win
let bandPhoto = "<img src='assets/images/hangman.jpg'>"; // initial game image
document.getElementById("thePhoto").innerHTML = (bandPhoto); // display the game image

// set a variable for the band's song to play on a win
let bandMP3 = bandChoice.mp3;

// set a variable for the band's name and song title to display on a win
// set an intro message instructions to display where the band and song title will appear
let bandSongName = "<strong><em>Guess the name of the '80s band I'm thinking of, and you'll get a blast from the past!</em></strong>";
document.getElementById("theSongName").innerHTML = (bandSongName); // display intro message

// END OF RANDOM GAME OBJECT VARIABLES


// START GAME PLAY VARIABLES

// set a variable to count number of remaining guesses
let guessesRemaining = 12;
document.getElementById("theRemaining").textContent = (guessesRemaining); // write to page

// set a variable for the user's key press
let userGuess; // used in play() by DOCUMENT.ONKEYUP() {event.key.toUpperCase();}

// set an Array to hold the accumulated userGuess key press values
let lettersGuessed = [];
document.getElementById("theGuesses").textContent = (lettersGuessed); // write to page

// set a variable to keep track of user wins
let wins = 0;
document.getElementById("theWins").textContent = (wins); // write to page

// END OF GAME PLAY VARIABLES


// START FUNCTION EXPRESSIONS: reset, winning, play


// resets the game to a new random band either at end of winning(), or if guessesRemaining < 1
let reset = function () {

    // randomly select an element (a band object) from bandsArray
    bandChoice = bandsArray[Math.floor(Math.random() * bandsArray.length)];

    // wordChoice is an Array with the letters of the band name
    wordChoice = bandChoice.name;

    // use .slice to make an independent copy of wordChoice which will remain an array
    // wordArray here is an Array of letters that will become underscores of the band's name
    wordArray = wordChoice.slice();

    // here is where wordArray becomes an Array filled with underscores
    wordArray = wordArray.fill("_");

    // use .slice to make wordDisplay which will be turned into a String
    wordDisplay = wordArray.slice();

    // use .join with space separator to turn array into a string
    wordDisplay = wordDisplay.join(" ");

    // write the blanks to page SPAN
    document.getElementById("theWord").textContent = (wordDisplay);


    // reset hidden band objects to be revealed by winning()
    bandPhoto = bandChoice.photo;
    bandMP3 = bandChoice.mp3;
    bandSongName = bandChoice.song;

    // reset the number of guessesRemaining to 12
    guessesRemaining = 12;

    // empties the array of lettersGuessed
    lettersGuessed = [];
    document.getElementById("theGuesses").textContent = (lettersGuessed); // write to page

    // document.getElementById("theBand").innerHTML = (wordChoice); // FOR DEV ONLY, REMOVE


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

    // if userGuess is !NOT included in the lettersGuessed already Array,
    if (!lettersGuessed.includes(userGuess)) {

        // and if userGuess IS included in the secret wordChoice band name Array
        if (wordChoice.includes(userGuess)) {

            // then loop through all items in the wordChoice array of letters,
            for (let i = 0; i < wordChoice.length; i++) {

                // and IF a character in position [i] in wordChoice matches the userGuess character
                if (wordChoice[i] === userGuess) {

                    // then change the underscore in position [i] in the wordArray of blanks to the userGuess character
                    // this uses String.replace() to replace the String value of "_" to "A" in the wordArray element
                    wordArray[i] = wordArray[i].replace(/_/g, userGuess);

                    // and then copy wordArray values into independent wordDisplay Array
                    wordDisplay = wordArray.slice();

                    // and then convert the wordDisplay Array into a space-separated String
                    wordDisplay = wordDisplay.join(" ");

                    // and then write updated wordDisplay String to the page
                    document.getElementById("theWord").textContent = (wordDisplay);

                }
            }

            if (!wordDisplay.includes("_")) {
                // duh, winning!
                winning();

            } else {
                // do nothing
                return;
            }

        } else {

            if (!lettersGuessed.includes(" " + userGuess)) {

                // .push the unmatched userGuess onto the end of the lettersGuessed array
                lettersGuessed.push(" " + userGuess);
                // and write the new value of lettersGuessed to the page
                document.getElementById("theGuesses").textContent = (lettersGuessed);
                // and decrement the amount of guessesRemaining by 1
                guessesRemaining = guessesRemaining - 1;
                document.getElementById("theRemaining").textContent = (guessesRemaining); // write to page

                if (guessesRemaining < 1) {
                    // reset to a new game
                    reset();

                } else {
                    // do nothing
                    // return;
                }
            } else {
                // do nothing
                // return;
            }
        }
    } else {
        // do nothing
        return;
    }
};




// END OF FUNCTION EXPRESSIONS: reset, winning, play

// END OF VARIABLES INITIALIZATIONS



// START GAME PLAY TRIGGER FUNCTION

// call reset on page load
reset();

// when any key is lifted up after being pressed, the event is passed in as (event)
document.onkeyup = function (event) {

    // the value of the key press, converted to ALL UPPER CASE, is assigned to userGuess String variable
    userGuess = event.key.toUpperCase();

    // DEV CODE
    console.log(userGuess);
    // document.getElementById("theGuess").innerHTML = (userGuess); // DISPLAY FOR DEV ONLY

    // ...and also the play() function is triggered, which runs the game's decision logic tree
    play(event);

    // return userGuess;

};

// END GAME PLAY TRIGGER FUNCTION
