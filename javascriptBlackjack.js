var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
var values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

function createDeck() {
  var deck = [];
  for (var suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (var valueIdx = 0; valueIdx < values.length; valueIdx++) {
      deck.push({
        suit: suits[suitIdx],
        value: values[valueIdx]
      });
    }
  }

  return deck;
}

function getCardString(card) {
  return card.value + ' of ' + card.suit;
}

function getNextCard() {
  return deck.shift();
}

var deck = createDeck();

for (var i = 0; i < deck.length; i++) {
  console.log(deck[i]);
}

var playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log("  " + getCardString(playerCards[0]));
console.log("  " + getCardString(playerCards[1]));

console.log("Your current hand value is: " + (playerCards[0].value + playerCards[1].value));

var hit = confirm("Would you like to hit or stay?");

if (hit) {
  playerCards.push(getNextCard());
  console.log("You were dealt a: " + getCardString(playerCards[playerCards.length - 1]));
} else {
  console.log("You chose to stay.");
}

console.log("Your current hand value is: " + (playerCards[0].value + playerCards[1].value + playerCards[2].value));

var hit = confirm("Would you like to hit or stay?");

if (hit) {
  playerCards.push(getNextCard());
  console.log("You were dealt a: " + getCardString(playerCards[playerCards.length - 1]));
} else {
  console.log("You chose to stay.");
}

console.log("Your current hand value is: " + (playerCards[0].value + playerCards[1].value + playerCards[2].value + playerCards[3].value));

var hit = confirm("Would you like to hit or stay?");

if (hit) {
  playerCards.push(getNextCard());
  console.log("You were dealt a: " + getCardString(playerCards[playerCards.length - 1]));
} else {
  console.log("You chose to stay.");
}

console.log("Your current hand value is: " + (playerCards[0].value + playerCards[1].value + playerCards[2].value + playerCards[3].value + playerCards[4].value));

var hit = confirm("Would you like to hit or stay?");

if (hit) {
  playerCards.push(getNextCard());
  console.log("You were dealt a: " + getCardString(playerCards[playerCards.length - 1]));
} else {
  console.log("You chose to stay.");
}

console.log("Your current hand value is: " + (playerCards[0].value + playerCards[1].value + playerCards[2].value + playerCards[3].value + playerCards[4].value + playerCards[5].value));
