function loadBlocks(){
	var cmenu = "";
	var list = document.querySelector("div.keyboard");
		for(var i=0; i < blocks.length; i++){
			cmenu = "";
			var opts = blocks[i].split(",");
			/*if(opts.length > 0){
				cmenu += "<div class='cmenu "+i+"'>";
				for(var a = 0; a < opts.length; a++){
					cmenu = cmenu + "<button class='key cm waves-effect btn-flat' data-insert='"+ list.dataset.insert +"' data-img='blocks/"+ opts[a] +"' class='"+opts[a]+"'><img src='blocks/"+ opts[a] +"'/></button>";
				}
				cmenu = cmenu + "</div>";
			}*/
			list.innerHTML = list.innerHTML + "<button class='key waves-effect btn blue "+i+"' data-insert='"+ list.dataset.insert +"' data-img='blocks/"+ opts[0] +"'><img src='blocks/"+ opts[0] +"'/>"+cmenu+"</button>";
			//$("button."+i).append(cmenu);
			cmenu = "";
		}
		list.innerHTML = list.innerHTML + "<button class='key waves-effect btn red enter' data-insert='"+ list.dataset.insert +"' data-img='br'>[_]</button>";
	$("button.key").click(function(){
		//$('div#'+this.dataset.insert+'[contenteditable="true"]').html($('div#'+this.dataset.insert+'[contenteditable="true"]').html() + "<img src='"+ this.dataset.img +"'/>");
		if(this.dataset.img == "br"){
			$('div#'+this.dataset.insert+'[contenteditable="true"]').html($('div#'+this.dataset.insert+'[contenteditable="true"]').html() + "<br>");
		} else {
			$('div#'+this.dataset.insert+'[contenteditable="true"]').html($('div#'+this.dataset.insert+'[contenteditable="true"]').html() + "<img src='"+ this.dataset.img +"'/>");
		}
	});
	$(".key:not(.cm)").contextmenu(function(e){
			$(this).children(".cmenu").css('display','block');
			return false;
		});
		$("*").click(function(e){
			$(".cmenu").css('display','none');
		});
		var theHandle = document.getElementById("khandle");
		var theRoot = document.getElementById("keyboard");
		Drag.init(theHandle, theRoot);
}
loadBlocks();