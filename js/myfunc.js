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
  $(xml).find("result").each(function(i,val){
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
//==================================================
//  名前： makeNameSelect
//  概要： サーバー上のXMLからセレクトボックスを作成する
//  引数： path <i  > : XMLファイルのパス
//  戻値： なし
//==================================================
function makeNameSelect(path){
  var xml = loadXML(path);
  var sel = $('#a_name');
  //----- セレクトボックスを初期化する
  sel.empty();
  //----- optionを作成
  $(xml).find("result name").each(function(i,val){
    var name = $(val).text();
    var op = $('<option>')
    .attr('value', name)
    .text(name);
    sel.append(op);
  });
}
//==================================================
//  名前： makeAnswerTable
//  概要： サーバー上のXMLから回答表を作成する
//  引数： path <i  > : XMLファイルのパス
//  戻値： なし
//==================================================
function makeAnswerTable(path){
  var xml = loadXML(path);
  var box = $('#answerbox');
  //----- 回答表を初期化する
  box.empty();
  //----- 回答表を作成
  $(xml).find("title date").each(function(i,val){
    var date = $(val).text();
    // 行を追加
    var row = $('<div>').addClass('a_rowbox');
    box.append(row);
    // 日程追加
    var col = $('<div>').addClass('a_colbox')
                        .text(date + ' :');
    row.append(col);
    // 解答欄追加
    // 出席のチェックボックス追加
    col = $('<div>').addClass('a_colbox isSelected ');
    row.append(col);
    var chk = $('<a>').addClass('a_answer')
                      .attr('id', 'date' + i + '_o')
                      .attr('href', '#date' + i + '_x')
                      .text('出席')
                      .click(function(){
                        var o = $(this);
                        var x = $(this).attr('href');
                        $(o).parent().addClass('isSelected');
                        $(x).parent().removeClass('isSelected');
                      });
    col.append(chk);
    // 出席のチェックボックス追加
    col = $('<div>').addClass('a_colbox');
    row.append(col);
    var chk = $('<a>').addClass('a_answer')
                      .attr('id', 'date' + i + '_x')
                      .attr('href', '#date' + i + '_o')
                      .text('欠席')
                      .click(function(){
                        var x = $(this);
                        var o = $(this).attr('href');
                        $(x).parent().addClass('isSelected');
                        $(o).parent().removeClass('isSelected');
                      });
    col.append(chk);
  });
}
