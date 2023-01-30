class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards =[];
    this.pairsClicked=0;
    this.pairsGuessed=0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    if(!this.cards){
      return undefined
    }
    let j;
    for (let i=this.cards.length-1; i>=1; i--) {
      j = Math.floor(Math.random()*(i+1))
      this.cards[i] = this.cards[j];
      this.cards[j] = this.cards[i];
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if(card1 === card2){
      this.pairsGuessed++
      this.checkIfFinished()
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length/2){
      return true
    } else {
      return false
    }
  }
}
