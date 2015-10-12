$(function(){
	$("#courseStep1").click(function(){$(this).hide()})

	$(".sidebutton").click(function(){$(".sidebutton").removeClass("selected"); $(this).addClass("selected");})

	$(".yingyong").click(function(){$("#applist").fadeIn(200); $("#moduleset").fadeOut(); })
	$(".shezhi").click(function(){$("#moduleset").fadeIn(200); $("#applist").fadeOut(); })
	winowHeight = $(window).height();
	btngroupHeight=winowHeight-105;
	$('#btngroup').slimScroll({width:'170px',railVisible:true,height:btngroupHeight,railColor:'#ffffff',color:'#ffffff'})
	$("#sidemenu").height(winowHeight);
	



	
})



$(window).resize(function(){
		console.log($(window).height());
		winowHeight = $(window).height();
		btngroupHeight=winowHeight-105;
		$("#sidemenu").height(winowHeight);
		$('#btngroup').slimScroll({width:'170px',railVisible:true,height:btngroupHeight,railColor:'#ffffff',color:'#ffffff'})
   //process here
	});