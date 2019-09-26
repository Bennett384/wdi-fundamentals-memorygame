var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds'
},
];

//Initialize user input to an empty array
var cardsInPlay = [];

//Check user selected cards for match and display message
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

//When cards are clicked, this will flip over the cards and display cards value
var flipCard = function() {
	cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	if (cardsInPlay.length === 4) {
		checkForMatch();
	}
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

//Setting up memory card game board
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipcard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//Reset the game when button is clicked
var resetGame = function() {
	//upon button press function will reset game
	//set cardsInPlay array to " "
	//clear cardImage and set it to image/back
	//run createBoard
	for (var i = 0; i < cards.length; i++) {
		cardElement.setAttribute('src', 'images/back.png');

	}
	cardsInPlay = [];

	}

	createBoard();





console.log("Up and running!");


