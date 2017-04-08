$(function(){
	var wrap    = $('#milight-editor-wrap'),
		bold    = $("#milight-editor-bold"),
		link    = $("#milight-editor-link"),
		code    = $("#milight-editor-code"),
		getpho  = $("#milight-editor-pic"),
		getPic  = $('#milight-editor input[type=file]'),
		list    = $('#milight-editor-list'),
		hr      = $('#milight-editor-hr');
	// document.execCommand('formatblock',false,'<p>');
	wrap.click(function(){
		document.execCommand('formatblock',false,'<p>');
	});
	bold.click(function(){
		document.execCommand('bold',false,null);
	});
	link.click(function(){
		var linktext = document.getSelection();
		document.execCommand('createlink',false,linktext);
	});
	code.click(function(){
		document.execCommand('formatblock',false,'<pre>');
	});
	list.click(function(){
		document.execCommand('insertorderedlist',false,null);
	});
	hr.click(function(){
		document.execCommand('inserthorizontalrule',false,null);
	});
	getpho.click(function(){
		getPic.trigger('click');
	});
	getPic.change(function(){
		// filearr.push(getPic[]);
		console.log(getPic[0].files);
		if(this.files[0] !== undefined){
			var file;
			if (window.FileReader) {
				for(var i=0;i<this.files.length;i++){
					var reader = new FileReader(); 
					reader.onload = function (e) {
						document.execCommand('insertimage',false,e.target.result);
						   //e.target.result就是最后的路径地址
					};  
					file = this.files[i];
					reader.readAsDataURL(file); //监听文件读取结束后事件
					reader = null;
				}
			   	
			} 
		}  
	});




});