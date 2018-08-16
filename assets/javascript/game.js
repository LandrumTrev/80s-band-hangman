// Pseudocode for Word Guess Game aka Hangman, 80s Style


// ON PAGE LOAD--put all these variables in an OBJECT "hangMan"

let hangMan = {

    let bandsArray = [
    
        {
            name: ["A", "-", "H", "A"],
            photo: "<img src:../images/aha.jpg>",
            mp3: "<img src:../music/aha.mp3>",
            song: "The Sun Always Shines On TV by a-ha"
        },
    
        {
            name: ["T", "H", "E", " ", "P", "O", "L", "I", "C", "E"],
            photo: "<img src:../images/thepolice.jpg>",
            mp3: "<img src:../music/thepolice.mp3>",
            song: "Spirits In The Material World by The Police"
        },
    
        {
            name: ["R", "U", "S", "H"],
            photo: "<img src:../images/rush.jpg>",
            mp3: "<img src:../music/rush.mp3>",
            song: "Red Barchetta by Rush"
        },
    
        {
            name: ["S", "T", "E", "V", "I", "E", " ", "N", "I", "C", "K", "S"],
            photo: "<img src:../images/stevienicks.jpg>",
            mp3: "<img src:../music/stevienicks.mp3>",
            song: "Blue Lamp by Stevie Nicks"
        },
    
        {
            name: ["B", "O", "B", " ", "M", "A", "R", "L", "E", "Y"],
            photo: "<img src:../images/bobmarley.jpg>",
            mp3: "<img src:../music/bobmarley.mp3>",
            song: "Small Axe by Bob Marley and the Wailers"
        },
    
        {
            name: ["T", "H", "E", " ", "C", "L", "A", "S", "H"],
            photo: "<img src:../images/theclash.jpg>",
            mp3: "<img src:../music/theclash.mp3>",
            song: "Lost In The Supermarket by The Clash"
        },
    
        {
            name: ["M", "A", "R", "V", "I", "N", " ", "G", "A", "Y", "E"],
            photo: "<img src:../images/marvingaye.jpg>",
            mp3: "<img src:../music/marvingaye.mp3>",
            song: "Sexual Healing by Marvin Gaye"
        },
    
        {
            name: ["B", "I", "L", "L", "Y", " ", "I", "D", "O", "L"],
            photo: "<img src:../images/billyidol.jpg>",
            mp3: "<img src:../music/billyidol.mp3>",
            song: "Eyes Without A Face by Billy Idol"
        },
    
        {
            name: ["D", "U", "R", "A", "N", " ", "D", "U", "R", "A", "N"],
            photo: "<img src:../images/duranduran.jpg>",
            mp3: "<img src:../music/duranduran.mp3>",
            song: "The Reflex by Duran Duran"
        },
    
        {
            name: ["T", "H", "E", " ", "C", "A", "R", "S"],
            photo: "<img src:../images/thecars.jpg>",
            mp3: "<img src:../music/thecars.mp3>",
            song: "Drive by The Cars"
        },
    
    ];
    
    let bandChoice = 9;
    // choose a random array element from bandsArray[i]
    // use to keep track of name, photo, mp3, and song name of current word
    
    let wordChoice = ["T", "H", "E", " ", "C", "A", "R", "S"];
    // an Array of individual CAPITAL letters, 
    // from the .name of the current bandsArray[bandChoice] object
    // an Array used to compare right/wrong answers against for insertion into wordDisplay
    
    let wordDisplay = ["_", "_", "_", "_", "_", "_", "_", "_"];
    // an Array; for each letter element in the wordChoice array above,
    // create an element in this array that is "_"
    // used to display the current status of the guessed word in HTML
    
    let guessesRemaining = 12;
    // used to keep track of how many guesses the user has left
    
    let userGuess = "a";
    // initialize but leave empty.
    // used to track the value of each key pressed by user as a guess
    // value is set in the DOCUMENT.KEYUP() function as event.key.toUpperCase()
    
    let lettersGuessed = ["D", "H", "K", "Q"];;
    // an Array, empty on page load and at reset()
    // used to keep track of each new (not previously pressed) key value in userGuess
    
    let bandPhoto = "<img src:../images/thecars.jpg>";
    // get photo from the .photo of the current bandsArray[bandChoice] object
    
    let bandMP3 = "<img src:../music/thecars.mp3>";
    // get audio file from the .mp3 of the current bandsArray[bandChoice] object
    
    let bandSongName = "<img src:../music/thecars.mp3>";
    // text of song and band names from the .song of the current bandsArray[bandChoice] object
    
    let wins = 0;
    // start at 0 (or unset? as in the example)
    
    
    // END OF OBJECT PRIMITIVE, OBJECT, AND ARRAY VARIABLES
    // START OBJECT FUNCTION PROPERTIES (METHODS?)
    
    
    // resets the game either at end of winning(), or if guessesRemaining < 1
    let reset = function () {
    
        this.bandChoice(); //gets a new random object (array element index#) from bandsArray
        this.wordChoice(); //sets a new word (letter array) from bandsArray[bandChoice] object
        this.wordDisplay(); // resets the displayed word on screen as _ _ _ _ _
        this.guessesRemaining() = 12; //resets remaining guesses to 12
        this.lettersGuessed = []; //resets and empties the array of lettersGuessed
        getElementById("theGuesses").innerHTML(lettersGuessed); //write empty array to HTML
    
    },
    
    // shows band photo and song name, plays song, increases wins +1, and runs reset()
    let winning = function () {
    
        getElementById("thePhoto").innerHTML(bandPhoto); //change image to guessed band photo
        getElementById("theMP3").innerHTML(bandMP3); //change audio to guessed band song
        getElementById("theSongName").innerHTML(bandSongName); //change audio to band song
        wins = wins + 1; // increase the wins variable by 1
        getElementById("theWins").contentText(wins); //write the new number of wins in HTML
        this.reset(); //run the reset() function to reset for a new game
    
    },
    
    
    // the meat and potatoes of the logic tree that occurs when DOCUMENT.ONKEYUP fires
    let play = function () {
    
    
    
    }
    
    
    
    };
    // END OF OBJECT CONTAINING ALL VARIABLES
    
    
    
    
    // START GAME PLAY TRIGGER FUNCTION
    
    document.onkeyup = function (event) {
        userGuess = event.key.toUpperCase();
        play();
    }