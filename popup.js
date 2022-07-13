// 「選択範囲をコピー」が押されたら、現在アクティブなタブへ通信をして、選択範囲の情報を取得
$('#info-get').on('click', function(){
	chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
	  chrome.tabs.sendMessage(tabs[0].id, {message: '選択範囲ちょうだい'}, function(item){
		if(!item){
		  alert('リロードしてください');
		  return;
		}
		$('#memo').val(item);
	  });
	});
  });

  $('#copy').on('click', function() {
	navigator.clipboard.writeText($("#memo").val());
	$('#copy').val("コピーされました");
  })
