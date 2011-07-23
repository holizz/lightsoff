/* Author: 

*/

jQuery(function($){
  var size = 5;
  for (var i = 0; i < size; i++)
    $('#board').append('<tr></tr>');
  for (var i = 0; i < size; i++)
    $('#board tr').append('<td><button class="light on"></button></td>');

  $.fn.toggleOnOff = function(){
    if ($(this).is('.light'))
      $(this).toggleClass('on').toggleClass('off');
    else if (this.length > 0)
      $(this).find('.light').toggleOnOff();
  };

  $('.light').click(function(){
    var n = $(this).parent().prevAll().length + 1;

    $(this).toggleOnOff();
    $(this).parent().prev().toggleOnOff();
    $(this).parent().next().toggleOnOff();
    $(this).parents('tr').prev().find('td:nth-child('+n+')').toggleOnOff();
    $(this).parents('tr').next().find('td:nth-child('+n+')').toggleOnOff();

    return false;
  });
});
