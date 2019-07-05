'use strict'
//==================================================
//  名前： makeTable
//  概要： サーバー上のXMLから表を作成する
//  引数： path <i  > : XMLファイルのパス
//  戻値： なし
//==================================================
function makeTable(path){

  var xml = loadXML(path);
  var title = $('#title');
  var results = $('#results');
  //----- 表を初期化する
  title.empty();
  results.empty();
  //----- タイトル行を作成
  $(xml).find("title *").each(function(i,val){
    var cell = $('<div>').addClass('cell');
    title.append(cell);
    var p = $('<p>').text($(val).text());
    cell.append(p);
  });
  //----- データを作成
  $(xml).find("ROOT result").each(function(i,val){
    var row = $('<div>').addClass('row');
    results.append(row);
    $(val).find('*').each(function(j,val2){
      var cell = $('<div>').addClass('cell');
      row.append(cell);
      var p = $('<p>').text($(val2).text());
      cell.append(p);
    //  div.append('<td>'+$(val2).text()+'</td>');
    });
  });

}

