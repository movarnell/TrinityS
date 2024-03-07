// Define a class named Deck
class Deck {
    // Define the constructor function that will be called when a new Deck is created
    constructor() {
        // Define the suits of the cards
        let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        // Define the face values of the cards
        let faceValues = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "J",
            "Q",
            "K",
            "A",
        ];
        // Initialize an empty array to hold the cards
        this.deck = [];

        // Loop over each suit
        for (let i = 0; i < suits.length; i++) {
            // Loop over each face value
            for (let x = 0; x < faceValues.length; x++) {
                // Create a card with the current suit and face value, and a numerical value
                let card = {
                    suit: suits[i],
                    faceValue: faceValues[x],
                    value: x,
                };
                // Add the card to the deck
                this.deck.push(card);
            }
        }
        // Log the deck to the console
        console.log(this.deck);
    }

    // Define a method to shuffle the deck
    shuffle(deck) {
        // Repeat the shuffle process 2,000,000 times to ensure randomness
        for (let x = 0; x < 2_000_000; x++) {
            // Loop backwards through the deck
            for (let i = deck.length - 1; i > 0; i--) {
                // Generate a random index
                const j = Math.floor(Math.random() * (i + 1));
                // Swap the card at the current index with the card at the random index
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        }
        // Return the shuffled deck
        return this.deck;
    }
}

// Create a new deck
let ourDeck = new Deck();
// Log the new deck to the console
console.log(ourDeck);
// Shuffle the deck and log the shuffled deck to the console
console.log(ourDeck.shuffle(ourDeck.deck));

//How to split the deck between 2 players. If you split the deck, you can run the game 26 times and be done.
// Log the deck to the console
console.log(ourDeck);
// Split the deck in half and assign the first half to player 1
let player1Deck = ourDeck.deck.slice(0, 26);
// Log player 1's deck to the console
console.log(player1Deck);
// Assign the second half of the deck to player 2
let player2Deck = ourDeck.deck.slice(26, 52);
// Log player 2's deck to the console
console.log(player2Deck);

// for loop to run 26 times, comparing the cards and printing the results. 
// show card values in the console for each one. 
// we need two variables to hold the scores.