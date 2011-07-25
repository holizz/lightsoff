/* Author: 

*/


var LightsOff = Class.$extend({
  levels: [
    '00000|00100|01110|10100|11000',
    '00000|00110|01110|10100|01000'
  ],

  __init__: function(data) {
    this.board = $(data.board);
    this.moveCounter = $(data.moveCounter);
    this.levelCounter = $(data.levelCounter);

    this.defineFunctions();
    this.createBoard();
    this.mapHandlers();

    this.loadLevel(this.levels[0]);
  },

  defineFunctions: function() {
    $.fn.toggleOnOff = function(){
      if ($(this).is('.light'))
        $(this).toggleClass('on').toggleClass('off');
      else if (this.length > 0)
        $(this).find('.light').toggleOnOff();
    };
  },

  createBoard: function() {
    var size = 5;
    for (var i = 0; i < size; i++)
      this.board.append('<tr></tr>');
    for (var i = 0; i < size; i++)
      $('tr', this.board).append('<td><button class="light on"></button></td>');
  },

  mapHandlers: function() {
    var thus = this;

    $('.light', this.board).click(function(){
      var n = $(this).parent().prevAll().length + 1;

      $(this).toggleOnOff();
      $(this).parent().prev().toggleOnOff();
      $(this).parent().next().toggleOnOff();
      $(this).parents('tr').prev().find('td:nth-child('+n+')').toggleOnOff();
      $(this).parents('tr').next().find('td:nth-child('+n+')').toggleOnOff();

      thus.moveCounter.val(parseInt(thus.moveCounter.val()) + 1);

      thus.endOfLevel();

      return false;
    });
  },

  loadLevel: function(level) {
    $('.light', this.board).removeClass('off').addClass('on');
    level = level.replace(/\|/g, '');

    var i = 0;
    $('.light', this.board).each(function(){
      if (level[i]==='0')
        $(this).toggleOnOff();
      i++;
    });
  },

  endOfLevel: function() {
    if($('.light', this.board).filter('.on').length > 0)
      return;

    this.victoryAnimation();
    this.levelCounter.val(parseInt(this.levelCounter.val()) + 1);
    var next = this.levels[parseInt(this.levelCounter.val()) - 1];
    this.loadLevel(next);
  },

  victoryAnimation: function() {
    console.log('victoryAnimation');
  }
});

jQuery(function($){
  new LightsOff({
    board: '#board',
    moveCounter: '#move-counter',
    levelCounter: '#level-counter'
  });
});
