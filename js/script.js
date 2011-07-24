/* Author: 

*/

jQuery(function($){

  var loadGame = function(game) {
    $('#board .light').removeClass('off').addClass('on');
    game = game.replace(/\|/g, '');

    var i = 0;
    $('#board .light').each(function(){
      if (game[i]==='0')
        $(this).toggleOnOff();
      i++;
    });
  }

  $.fn.toggleOnOff = function(){
    if ($(this).is('.light'))
      $(this).toggleClass('on').toggleClass('off');
    else if (this.length > 0)
      $(this).find('.light').toggleOnOff();
  };

  // Create board

  var size = 5;
  for (var i = 0; i < size; i++)
    $('#board').append('<tr></tr>');
  for (var i = 0; i < size; i++)
    $('#board tr').append('<td><button class="light on"></button></td>');

  // Allow buttons to be pressed

  $('.light').click(function(){
    var n = $(this).parent().prevAll().length + 1;

    $(this).toggleOnOff();
    $(this).parent().prev().toggleOnOff();
    $(this).parent().next().toggleOnOff();
    $(this).parents('tr').prev().find('td:nth-child('+n+')').toggleOnOff();
    $(this).parents('tr').next().find('td:nth-child('+n+')').toggleOnOff();

    $('#move-counter').val(parseInt($('#move-counter').val()) + 1);

    return false;
  });

  // Set up game

  loadGame('00000|00100|01110|10100|11000');
  loadGame('00000|00110|01110|10100|01000');
});
