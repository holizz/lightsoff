/* Author: 

*/

jQuery(function($){
  var size = 5;
  for (var i = 0; i < size; i++)
    $('#board').append('<tr></tr>');
  for (var i = 0; i < size; i++)
    $('#board tr').append('<td><button class="light on"></button></td>');

  $.fn.toggleOnOff = function(){
    $(this).toggleClass('on').toggleClass('off');
  };

  $('.light').click(function(){
    var n = $(this).parent().prevAll().length + 1;
    console.log(n);

    $(this).toggleOnOff();
    $(this).parent().prev().find('button').toggleOnOff();
    $(this).parent().next().find('button').toggleOnOff();
    $(this).parents('tr').prev().find('td:nth-child('+n+') button').toggleOnOff();
    $(this).parents('tr').next().find('td:nth-child('+n+') button').toggleOnOff();
  });
});
