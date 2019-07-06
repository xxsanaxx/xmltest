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
    var group = 'a_date' + i;
    // 出席のチェックボックス追加
    makeAnswerButton(row,group,'出席',false);
    // 欠席のチェックボックス追加
    makeAnswerButton(row,group,'欠席',false);
    // 未定のチェックボックス追加
    makeAnswerButton(row,group,'未定',true);
  });
}
//==================================================
//  名前： makeAnswerButton
//  概要： 回答ボタンを作成する
//  引数： parent       <i  > : 作成するボタンの親要素
//         group        <i  > : グループ（日程No.）
//         label        <i  > : ラベル
//         isSelected   <i  > : 選択状態にするか
//  戻値： なし
//==================================================
function makeAnswerButton(parent, group, label, isSelected ){
  //ボタンを作成する
  var btn = $('<div>').addClass('a_colbox')
                      .addClass('a_answer')
                      .addClass(group)
                      .text(label)
                      .click(function(){
                        var me = $(this);
                        $('.' + group).removeClass('isSelected');
                        $(me).addClass('isSelected');
                      });
  parent.append(btn);
  // 選択状態を設定する
  if(isSelected)  btn.addClass('isSelected');
  //ラベルを
}
//==================================================
//  名前： checkAnswer
//  概要： 回答にチェックをする
//  引数： current <i  > : クリックされたアイテム
//  戻値： なし
//==================================================
function checkAnswer(current){
  var me = $(current);

}
