const {deck, dealer, player} = require('./blackjack');

while (player.score < 21 && dealer.score < 21) {
  let choice = Math.random() > 0.5 ? 'hit' : 'stand';

  if (choice === 'hit') {
    player.hit(deck.deal());
  } else {
    dealer.hit(deck.deal());
  }
}

if (player.score > 21) {
  console.log('You busted!');
} else if (dealer.score > 21) {
  console.log('The dealer busted!');
} else if (player.score === 21) {
  console.log('You hit blackjack!');
} else if (dealer.score === 21) {
  console.log('The dealer hit blackjack!');
} else {
  console.log('You have a higher score than the dealer!');
}
