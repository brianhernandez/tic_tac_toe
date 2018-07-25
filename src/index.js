import 'jquery';
import './style.scss';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(document).ready(function() {
  var userSymbol = "close";//"X";
  var computerSymbol = "panorama_fish_eye";//"0";
  var tictactoeArray = ['','','','','','','','','',];
  var gameState = false;
  var count = 0;

  $('.container').click(function(event) {
    event.preventDefault();

    if ($(event.target).is('#x-button')) {
      userSymbol = "close"//"X";
      computerSymbol = "panorama_fish_eye"//"O";
      $('#x-button').addClass('btn-primary');
      $('#o-button').removeClass('btn-primary');
      resetGame();
    } else if ($(event.target).is('#o-button')) {
      userSymbol = "panorama_fish_eye"//"O";
      computerSymbol = "close"//"X";
      $('#o-button').addClass('btn-primary');
      $('#x-button').removeClass('btn-primary');
      resetGame();
    } else if ($(event.target).is('.reset')) {
      resetGame();
    }

    if (gameState) {
      return alert("Please restart the game.");
    }

    if ($(event.target).is('.tic')) {
      var gameBoardSlot = $(event.target).attr('id');
      playerTurn(userSymbol, gameBoardSlot);
    }

    function playerTurn(symbol, id) {
      var slotValue = $('#' + id).text();

      if (slotValue === '') {
        count++;
        tictactoeArray[id - 1] = symbol;
        $('#' + id).text(symbol);
        $('#' + id).removeClass('open');
        $('#' + id).addClass('material-icons');
        doWeHaveAWinner(tictactoeArray, symbol);

        if (gameState === false) {
          computerTurn(computerSymbol);
          doWeHaveAWinner(tictactoeArray, computerSymbol);
        }
      }
    }

    function computerTurn(symbol) {
      var slotTaken = false;

      while(slotTaken === false && count < 12) {
        var computersChoiceSlot = (Math.random() * 10).toFixed();
        var moveSlotText = $('#' + computersChoiceSlot).text();

        if (moveSlotText === '') {
          slotTaken = true;
          $('#' + computersChoiceSlot).text(symbol);
          $('#' + computersChoiceSlot).removeClass('open');
          $('#' + computersChoiceSlot).addClass('material-icons');
          tictactoeArray[computersChoiceSlot - 1] = symbol;
        }
      }
    }

    function doWeHaveAWinner(tictactoeArray, currentTurnSymbol) {
      if (tictactoeArray[0] === currentTurnSymbol
        && tictactoeArray[1] === currentTurnSymbol
        && tictactoeArray[2] === currentTurnSymbol) {
        gameState = true;
        $('#1, #2, #3').addClass('winning-tile');
      } else if (tictactoeArray[2] === currentTurnSymbol
        && tictactoeArray[4] === currentTurnSymbol
        && tictactoeArray[6] === currentTurnSymbol) {
        gameState = true;
        $('#3, #5, #7').addClass('winning-tile');
      } else if (tictactoeArray[0] === currentTurnSymbol
        && tictactoeArray[3] === currentTurnSymbol
        && tictactoeArray[6] === currentTurnSymbol) {
        gameState = true;
        $('#1, #4, #7').addClass('winning-tile');
      } else if (tictactoeArray[0] === currentTurnSymbol
        && tictactoeArray[4] === currentTurnSymbol
        && tictactoeArray[8] === currentTurnSymbol) {
        gameState = true;
        $('#1, #5, #9').addClass('winning-tile');
      } else if (tictactoeArray[1] === currentTurnSymbol
        && tictactoeArray[4] === currentTurnSymbol
        && tictactoeArray[7] === currentTurnSymbol) {
        gameState = true;
        $('#2, #5, #8').addClass('winning-tile');
      } else if (tictactoeArray[2] === currentTurnSymbol
        && tictactoeArray[5] === currentTurnSymbol
        && tictactoeArray[8] === currentTurnSymbol) {
        gameState = true;
        $('#3, #6, #9').addClass('winning-tile');
      } else if (tictactoeArray[2] === currentTurnSymbol
        && tictactoeArray[5] === currentTurnSymbol
        && tictactoeArray[8] === currentTurnSymbol) {
        gameState = true;
        $('#3, #6, #9').addClass('winning-tile');
      } else if (tictactoeArray[3] === currentTurnSymbol
        && tictactoeArray[4] === currentTurnSymbol
        && tictactoeArray[5] === currentTurnSymbol) {
        gameState = true;
        $('#4, #5, #6').addClass('winning-tile');
      } else if (tictactoeArray[6]===currentTurnSymbol
        && tictactoeArray[7] === currentTurnSymbol
        && tictactoeArray[8] === currentTurnSymbol) {
        gameState = true;
        $('#7, #8, #9').addClass('winning-tile');
      } else {
        gameState = false;
      }
    }

    function resetGame() {
      tictactoeArray = ['','','','','','','','','',];
      count = 0;
      $('.tic').text('').addClass('open');
      $('.winning-tile').removeClass('winning-tile');
      $('.material-icons').removeClass('material-icons');
      gameState = false;
    }
  });
});
