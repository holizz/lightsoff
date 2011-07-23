/* Author: 

*/

jQuery(function($){
  var size = 5;
  for (var i = 0; i < size; i++)
    $('#board').append('<tr></tr>');
  for (var i = 0; i < size; i++)
    $('#board tr').append('<td><button class="light on"></button></td>');
});
