/** カタカナをひらがなに変換する関数
 * @param {String} src - カタカナ
 * @returns {String} - ひらがな
 */
function katakanaToHiragana(src) {
  return src.replace(/[\u30a1-\u30f6]/g, function(match) {
    var chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
}

/** ひらがなをカタカナに変換する関数
 * @param {String} src - ひらがな
 * @returns {String} - カタカナ
 */
function hiraganaToKatagana(src) {
  return src.replace(/[\u3041-\u3096]/g, function(match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}
//==================================================
//  名前： loadXML
//  概要： サーバー上のXMLを読み込む
//  引数： path <i  > : XMLファイルのパス
//  戻値： XMLオブジェクト
//==================================================
function loadXML(path){
  var ret;
  $.ajax({
    url:path,
    type:"get",
    dataType:"xml",
    timeout:1000,
    cache:false,
    async: false, //並列処理をOFFにする、読み込み完了まで待機
  }).done(function(xml){
    ret=xml;
  }).fail(function(xml){
    alert("データの読み込みに失敗しました");
  });
  return ret;
}
