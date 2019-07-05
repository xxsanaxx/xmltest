(function(){
  'use strict'
  makeTable('https://xxsanaxx.github.io/xmltest/data/input.xml');

  $('#button').click(function(){
  });
  $('#button').mousedown(function(){
    $('#button').addClass('pressed');
  });
  $('#button').mouseup(function(){
    $('#button').removeClass('pressed');
  });
})();
