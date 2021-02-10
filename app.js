document.addEventListener('DOMContentLoaded', ()=>{

  // card options
  const cardArray = [{
    name: 'jupiter',
    img: 'images/jupiter.png'
  },
  {
    name: 'jupiter',
    img: 'images/jupiter.png'
  },
  {
    name: 'mars',
    img: 'images/mars.png'
  },
  {
    name: 'mars',
    img: 'images/mars.png'
  },
  {
    name: 'moon',
    img: 'images/moon.png'
  },
  {
    name: 'moon',
    img: 'images/moon.png'
  },
  {
    name: 'neptune',
    img: 'images/neptune.png'
  },
  {
    name: 'neptune',
    img: 'images/neptune.png'
  },
  {
    name: 'uranus',
    img: 'images/uranus.png'
  },
  {
    name: 'uranus',
    img: 'images/uranus.png'
  },
  {
    name: 'venus',
    img: 'images/venus.png'
  },
  {
    name: 'venus',
    img: 'images/venus.png'
  }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []
// create your board
function createBoard(){
  for(let i = 0; i<cardArray.length; i++){
    var card = document.createElement('img');
    card.setAttribute('src', 'images/solarsystem.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipcard)
    grid.appendChild(card)
  }
}

// check for matches
function checkForMatch(){
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if(cardsChosen[0] === cardsChosen[1]){
    alert('you found a match')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/solarsystem.png')
    cards[optionTwoId].setAttribute('src', 'images/solarsystem.png')
    alert('sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length;
  if(cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'congratulations! you found them all'
  }

}

// flip your card
    function flipcard(){
      var cardId = this.getAttribute('data-id');
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute('src', cardArray[cardId].img)
      if(cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
      }
    }
    createBoard()

})