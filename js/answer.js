(function(){
  'use strict'

  var xmlPath = 'https://xxsanaxx.github.io/xmltest/data/input.xml';
  makeNameSelect(xmlPath);
  makeAnswerTable(xmlPath);

  var  btn = $('#ok');
  btn.click(function(){
    alert('登録します');
  });
  btn.mousedown(function(){
    btn.addClass('pressed');
  });
  btn.mouseup(function(){
    btn.removeClass('pressed');
  });
  var cbtn = $('#cancel');
  cbtn.click(function(){
    alert('戻ります');
  });
  cbtn.mousedown(function(){
    cbtn.addClass('pressed');
  });
  cbtn.mouseup(function(){
    cbtn.removeClass('pressed');
  });

})();
