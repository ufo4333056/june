Date.prototype.Format = function(fmt, addMonth, addDay) { 
	addMonth = addMonth || 0;
	addDay = addDay || 0;
	var thisMonth = (this.getMonth()+1+addMonth) % 12, addYear = 0;
	if( (this.getMonth()+1+addMonth) / 12 > 1) {
		addYear = 1;
	}
	if(thisMonth == 0) {
		thisMonth = 12;
	}
	if(addDay != 0) {
		return new Date(this.getTime()+ addDay*86400000).Format("yyyy-MM-dd hh:mm:ss");
	}
	var o = { 
		"M+" : thisMonth,                 //月份 
		"d+" : this.getDate(),                    //日 
		"h+" : this.getHours(),                   //小时 
		"m+" : this.getMinutes(),                 //分 
		"s+" : this.getSeconds(),                 //秒 
		"q+" : Math.floor((this.getMonth()+3)/3), //季度 
		"S"  : this.getMilliseconds()             //毫秒 
	}; 
	if(/(y+)/.test(fmt)) 
		fmt=fmt.replace(RegExp.$1, ((this.getFullYear()+addYear)+"").substr(4 - RegExp.$1.length)); 
	for(var k in o) 
		if(new RegExp("("+ k +")").test(fmt)) 
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
	return fmt; 
}

$(function() {	
	var toolType = $("#moretools").attr("data-tools");
	var toolShow = ["", "", "", "", "", "", ""];
	switch(toolType) {
		case "taobao": 
			toolShow[0] = ' style="display:none;"'
			break;
		case "nav": 
			toolShow[1] = ' style="display:none;"'
			break;
		case "color": 
			toolShow[2] = ' style="display:none;"'
			break;
		case "jdtool": 
			toolShow[3] = ' style="display:none;"'
			break;
		case "bgfixed": 
			toolShow[4] = ' style="display:none;"'
			break;
		default:
			//toolShow[0] = ' style="display:none;"'
	}
	var morepannel = '<div id="morepannel" class="ui-dialog" style="display:none;position:absolute;z-index:1102;width:180px;background:#fff;left:3px;;top:39px;border:1px #e0e0e0 solid;">'+
		'<ul>'+
			'<li'+toolShow[0]+'><a class="june-preview" target="_blank" href="index.php">模板装修辅助工具</a></li>'+
			'<li'+toolShow[1]+'><a class="june-preview" target="_blank" href="navcss.html">导航样式生成工具</a></li>'+
			'<li'+toolShow[2]+'><a class="june-preview" target="_blank" href="color.html">色码获取工具</a></li>'+
			'<li'+toolShow[3]+'><a class="june-preview" target="_blank" href="jdtool.html">京东装修工具</a></li>'+
			'<li'+toolShow[4]+'><a class="june-preview" target="_blank" href="bgfixed.html">固定背景生成工具</a></li>'+
		'</ul>'+
	'</div>';
	var oldhtml = "";
	if($("#moretools").children("ul").children("li").length > 0 && $("#moretools").children("ul").children("li:eq(0)").children("a:eq(0)").html() == "悬浮代码生成工具") {
		oldhtml = $("#moretools").html()
	}
 	$("#moretools").html(morepannel + oldhtml);
	
	$("#moretools").on("click", function(){ 
		if($("#morepannel").css("display")=="none"){
			if($("#xifupannel").css("display")!="none"){
				$("#xifupannel").hide();
			}
			if($("#keyboardpannel").css("display")!="none"){
				$("#keyboardpannel").hide();
			}
			$("#morepannel").show();
		}else{
			$("#morepannel").hide();
		}
	});
	$("#kbhelp").on("click",function(){
		if($("#keyboardpannel").css("display")=="none"){
			if($("#xifupannel").css("display")!="none"){
				$("#xifupannel").hide();
			}
			if($("#keyboardpannel").css("display")!="none"){
				$("#keyboardpannel").hide();
			}
			if($("#morepannel").css("display")!="none"){
				$("#morepannel").hide();
			}
			$("#keyboardpannel").show();
		}else{
			$("#keyboardpannel").hide();
		}

	})


	$("#xifuconfig").on("click",function(){
		if($("#xifupannel").css("display")=="none"){
			if($("#xifupannel").css("display")!="none"){
				$("#xifupannel").hide();
			}
			if($("#keyboardpannel").css("display")!="none"){
				$("#keyboardpannel").hide();
			}
			if($("#morepannel").css("display")!="none"){
				$("#morepannel").hide();
			}
			$("#xifupannel").show();
		}else{
			$("#xifupannel").hide();
		}

	})









});


	