//Card
class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    }
    getImageUrl() {
        return `images/${this.point}_of_${this.suit}.png`
    }
}

let myCard = new Card(5, 'diamonds');
console.log(myCard.point);
console.log(myCard.suit);
console.log(myCard.getImageUrl());

//Hand
class Hand {
    constructor() {
        this.cardArray = [];
        this.sum = 0;
    }
    addCard(card) {
        return this.cardArray.push(card);
    }
    getPoints() {
        this.cardArray.forEach((card) => {
            this.sum += card.point;
        })
        return this.sum;
    }
}

let hand = new Hand();
hand.addCard(new Card(10, 'spades'));
hand.addCard(new Card(4, 'clubs'));
console.log(hand.getPoints());

//Deck
class Deck extends Hand{
    constructor() {
        super();
        this.deckSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
    }
    randomCard() {
        return Math.floor((Math.random() * 52));
    }

    randomSuit() {
        return Math.floor((Math.random() * 4));
    }

    randomPoint() {
        return Math.floor((Math.random() * 13) + 1);
    }
    
    createDeck() {
        for(var i = 0; i < 52; i++) {
            this.cardArray.push(new Card(this.randomPoint(), this.deckSuit[this.randomSuit()]));
        }
        return this.cardArray;
    }

    draw() {
        //if array length is greater than 0 there are cards still in deck, calling splice method to
        //remove card from deck and returning it. splice will return an array with one element so
        //adding [0] to access element
        if(this.cardArray.length > 0) {
            return this.cardArray.splice(this.randomCard(), 1)[0];
        }
    }
    shuffle() {
        //shuffle deck of cards with remainig cards used as length of shuffle, does not run if 1 or less 
        //cards remainig
        for (var i = this.cardArray.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = this.cardArray[i]
            this.cardArray[i] = this.cardArray[j]
            this.cardArray[j] = k
          }
          return this.cardArray;
    }
    numCardsLeft() {
        //returns length of array which is how many cards are left
        return this.cardArray.length;
    }
}

let deck = new Deck();
deck.createDeck();
console.log(deck.draw());
console.log(deck.numCardsLeft());
console.log(deck.shuffle());
