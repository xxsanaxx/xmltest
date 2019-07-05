'use strict'
//==================================================
//  名前： makeTable
//  概要： サーバー上のXMLから表を作成する
//  引数： path <i  > : XMLファイルのパス
//  戻値： なし
//==================================================
function makeTable(path){

  var xml = loadXML(path);
  var tbl = $('#res');
  //----- 表を初期化する
  tbl.empty();
  //----- タイトル行を作成
  var title = $('<tr>')
  tbl.append(title);
  $(xml).find("title *").each(function(i,val){
    title.append('<td>'+$(val).text()+'</td>');
  });
  //----- データを作成
  $(xml).find("ROOT result").each(function(i,val){
    var data = $('<tr>').attr( 'id', "data" + i );
    tbl.append(data);
    $(val).find('*').each(function(j,val2){
      data.append('<td>'+$(val2).text()+'</td>');
    });
  });

}
