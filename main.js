

var gameBoard = document.querySelector('.game-board');
var dataModel = {
  game: new Game(),
  whoseTurn: 1,
  winner: null,
  }
gameBoard.addEventListener('click',addToBoard)

function addToBoard(event) {

  if(!dataModel.game.board[event.target.id] && !dataModel.winner){
    dataModel.game.board[event.target.id] = dataModel.whoseTurn;
    dataModel.winner = dataModel.game.checkScore();
    updateDisplay();
  } else if (dataModel.winner === 1 || dataModel.winner === 2) {
    dataModel.game.saveWin();
    displayMini();
    dataModel.game.resetGame();
  } else if(dataModel.winner === 'draw'){
    dataModel.game.resetGame();
  }
    updateHeader();

}

function updateDisplay() {
  var spot = document.getElementById(event.target.id);
  spot.innerText = dataModel.whoseTurn;
  dataModel.whoseTurn = dataModel.whoseTurn === 1 ? 2 : 1
}

function updateHeader() {
    var turnHeader = document.querySelector('.turn-header');
    turnHeader.innerText = dataModel.winner ||`It is player ${dataModel.whoseTurn}'s turn`
}

function displayMini(){
  var miniGameBoard = document.getElementById(`mini-game-board-${dataModel.winner}`)
  if(dataModel.winner === 1){
    var boards = dataModel.game.playerOne.wins
  } else if (dataModel.winner === 2) {
    var boards = dataModel.game.playerTwo.wins
  }
  miniGameBoard.insertAdjacentHTML('beforeend', ` <section id = "single-mini-game">
    <article class = "mini-spot">${boards[boards.length -1][0] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][1] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][2] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][3] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][4] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][5] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][6] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][7] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][8] || ' '}
    </article>
    </trial>`)
}
