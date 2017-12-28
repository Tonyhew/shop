// JavaScript Document
$(document).ready(function(){
	/*banner*/
	$(".banspan span").eq(0).addClass("current");	
	$(".banimg a").eq(0).show().siblings("a").hide();
	$(".banspan span").mouseover(function(){
		numa=$(this).index();
		$(this).addClass("current").siblings("span").removeClass("current");
		$(".banimg a").eq(numa).fadeIn().siblings("a").fadeOut();
		});
	setInterval(function(){
		var a=$(".banspan .current").index();
		var b=$(".banspan span:last").index();
		if(a==b){
			$(".banspan span").eq(0).trigger("mouseover");
			}
			$(".banspan span").eq(a+1).trigger("mouseover");
		},5000);
		
	/*二级导航*/
	$(".navsecond>li").mouseover(function(){
		names=$(this).attr("name");
		$(this).addClass("current");
		$(".navlist").find("."+names).show();
		offset=$(this).offset();
		$("."+names).css({"top":(offset.top)+"px","left":(offset.left+198)+"px"});
		$("."+names).mouseover(function(){
			$(this).show();
			$(".navsecond>li[name="+names+"]").addClass("current");
			}).mouseout(function(){
				$(this).hide();
				$(".navsecond>li[name="+names+"]").removeClass("current");
				})
	}).mouseout(function(){
		$(this).removeClass("current");
		names=$(this).attr("name");
		$(".navlist").find("."+names).hide();
		});
		
	
	
	/*福利模块 大图切换*/
	$(".welfarezuo").each(function(){
		$(this).find(".welfarespan span").eq(0).addClass("current");
		var width=$(this).find(".welfareimg").width();
		var page=1;
		var i=1;
		var num=$(this).find(".welfarelist a").length;
		var pagemax=Math.ceil(num/i);
		$(this).find(".welfarespan span").mouseover(function(){
			spannum=$(this).index();
			$(this).parents(".welfarezuo").find(".welfarelist").animate({"left":-width*spannum+"px"},200);
			$(this).addClass("current").siblings("span").removeClass("current");
			page=spannum+1;
			});	
		});
	
	/*热销排行*/
	$(".welfareyou").each(function(){
		$(this).find(".hotcon:not(:first)").each(function(){
			$(this).find("ul").hide();
			});
		$(this).find(".hotcon").eq(0).find("dl").hide();
		$(this).find(".hotcon").each(function(){
			$(this).mouseover(function(){
				$(this).find("ul").show().parents(".hotcon").siblings(".hotcon").find("ul").hide();
				$(this).find("dl").hide().parents(".hotcon").siblings(".hotcon").find("dl").show();
				});
			});
		});
});