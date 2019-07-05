(function(){
  'use strict'

  var xmlPath = 'https://xxsanaxx.github.io/xmltest/data/input.xml';
  makeNameSelect(xmlPath);
  makeAnswerTable(xmlPath);

  $('#button').click(function(){
    alert('登録します');
    });
    $('#button').mousedown(function(){
      $('#button').addClass('pressed');
    });
    $('#button').mouseup(function(){
      $('#button').removeClass('pressed');
    });

})();
