import 'jquery';
import './style.scss';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(document).ready(function() {
  // $('body').append('<div class="hello">HELLO Moto</div>');
  var userSymbol = "X";
  var computerSymbol = "0";
  var tictactoeArray = ['*','*','*','*','*','*','*','*','*',];
  var gameState = false;
  var count = 0;

  $('.container').click(function(event) {
    event.preventDefault();
    if ($(event.target).is('#x-button')) {
      userSymbol = "X";
      computerSymbol = "O";
      $('#x-button').addClass('btn-primary');
      $('#o-button').removeClass('btn-primary');
      resetGame();
    } else if ($(event.target).is('#o-button')) {
      userSymbol = "O";
      computerSymbol = "X";
      $('#o-button').addClass('btn-primary');
      $('#x-button').removeClass('btn-primary');
      resetGame();
    }

    if ($(event.target).is('.reset')) {
      resetGame();
    }

    if ($(event.target).is('.tic')) {
      var gameBoardSlot = $(event.target).attr('id');
      // console.log($(event.target).attr('id'));
      playerTurn(userSymbol, gameBoardSlot);
    }

    function playerTurn(symbol, id) {
      var slotValue = $('#' + id).text();
      // console.log(slotValue);
      if (slotValue === '*') {
        count++;
        tictactoeArray[id - 1] = symbol;
        $('#' + id).text(symbol);
        doWeHaveAWinner(tictactoeArray, symbol)
        console.log(tictactoeArray);
      }
    }

    function doWeHaveAWinner(tictactoeArray, currentTurn) {
      if (tictactoeArray[0] === currentTurn && tictactoeArray[1]===currentTurn && tictactoeArray[2] === currentTurn) {
        gameState = true;
        // resetGame();
        // console.log('winner winner chicken dinner');
        $('#1, #2, #3').addClass('winning-tile');
      } else if (tictactoeArray[2] === currentTurn && tictactoeArray[4]===currentTurn && tictactoeArray[6] === currentTurn) {
        gameState = true;
        // resetGame();
        // console.log('winner winner chicken dinner');
        $('#3, #5, #7').addClass('winning-tile');
      } else if (tictactoeArray[0] === currentTurn && tictactoeArray[3]===currentTurn && tictactoeArray[6] === currentTurn) {
        gameState = true;
        // resetGame();
        // console.log('winner winner chicken dinner');
        $('#1, #4, #7').addClass('winning-tile');
      } else if (tictactoeArray[0] === currentTurn && tictactoeArray[4]===currentTurn && tictactoeArray[8] === currentTurn) {
        gameState = true;
        // resetGame();
        // console.log('winner winner chicken dinner');
        $('#1, #5, #9').addClass('winning-tile');
      } else if (tictactoeArray[1] === currentTurn && tictactoeArray[4]===currentTurn && tictactoeArray[7] === currentTurn) {
        gameState = true;
        // resetGame();
        // console.log('winner winner chicken dinner');
        $('#2, #5, #8').addClass('winning-tile');
      } else if (tictactoeArray[2] === currentTurn && tictactoeArray[5]===currentTurn && tictactoeArray[8] === currentTurn) {
        gameState = true;
        // resetGame();
        // console.log('winner winner chicken dinner');
        $('#3, #6, #9').addClass('winning-tile');
      } else if (tictactoeArray[2] === currentTurn && tictactoeArray[5]===currentTurn && tictactoeArray[8] === currentTurn) {
        gameState = true;
        // resetGame();
        // console.log('winner winner chicken dinner');
        $('#3, #6, #9').addClass('winning-tile');
      } else if (tictactoeArray[3] === currentTurn && tictactoeArray[4]===currentTurn && tictactoeArray[5] === currentTurn) {
        gameState = true;
        // resetGame();
        // console.log('winner winner chicken dinner');
        $('#4, #5, #6').addClass('winning-tile');
      } else if (tictactoeArray[6]===currentTurn && tictactoeArray[7]===currentTurn && tictactoeArray[8]===currentTurn) {
        gameState = true;
        // resetGame();
        // console.log('winner winner chicken dinner');
        $('#7, #8, #9').addClass('winning-tile');
      } else {
        gameState = false;
      }
    }
  });

  function resetGame() {
    tictactoeArray = ['*','*','*','*','*','*','*','*','*',];
    count = 0;
    $('.tic').text('*');
    $('.winning-tile').removeClass('winning-tile');
    gameState = true;
  }
})
