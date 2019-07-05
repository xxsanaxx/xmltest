(function(){
  'use strict'

  // $.get('data/input.xml', function(xml){
  //   var title = $(this).find("title").find("name").text();
  //   alert(title);
  // }
	alert("test");

  $.ajax({
		url:"data/input.xml",
		type:"get",
		dataType:"xml",
		timeout:1000,
		cache:false,
		error:function(){
			alert("xmlファイルの読み込み失敗");
			},
		success:function(xml){
			alert("xmlファイルの読み込み成功");
      var title = $(this).find("title").find("name").text();
      alert(title);
			}
		});
})();
