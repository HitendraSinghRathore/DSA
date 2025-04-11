function createCards() {
    const suites = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = []
    for(let suite of suites) {
        for(let rank of ranks) {
            deck.push(`${rank} of ${suite}`);
        }
    }
    return deck;
}
function shuffle(cards) {
    for(let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [cards[j], cards[i]] = [cards[i],cards[j]]
    }
}
function shuffleCards(numOfPlayers) {
    const deck = createCards();
    shuffle(deck);
    const players = [];
    if(deck.length % numOfPlayers !== 0) return 'Invalid number of players';
    const cardsPerPlayer = 52 / numOfPlayers;
    for(let i= 0;i< numOfPlayers;i++) {
        const hand = deck.slice(i*cardsPerPlayer, (i+1)*cardsPerPlayer);
        players.push(hand);
    }
    console.log(players);

}
shuffleCards(4);


