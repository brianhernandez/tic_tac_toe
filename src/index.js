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
      var slot = $(event.target).attr('id');
      // console.log($(event.target).attr('id'));
      userTurn(userSymbol, slot);
    }

    function userTurn(symbol, id) {
      var slotTaken = $('#' + id).text();
      // console.log(slotTaken);
      if (slotTaken === '*') {
        count++;
        tictactoeArray[id - 1] = symbol;
        $('#' + id).text(symbol);
        //doWeHaveAWinner(tictactoeArray, symbol)
        console.log(tictactoeArray);
      }
    }

    function doWeHaveAWinner(tictactoeArray, symbol){

    }

  });

  function resetGame() {
    tictactoeArray = ['*','*','*','*','*','*','*','*','*',];
    count = 0;
    $('.tic').text('*');
    gameState = true;
  }
})
