$(function(){
	var D = require("scripts/D"),
		w = $("#junebox").width(),
		h = $("#junebox").height();
	$("body").attr("scroll", "no");
	$("#bd").css("background", "none");
	$("#tControlBtn").children("span").each(function() {
		$(this).html("&nbsp;");
	});
});
