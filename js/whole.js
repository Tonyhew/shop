// JavaScript Document
$(document).ready(function(){
	
	
	/*关注我们*/
	$(".topleft").mouseover(function(){
		$(".activeall").show();
		offset=$(this).offset();
		$(".activeall").css({"top":(offset.top+16)+"px","left":(offset.left+0)+"px"});
		$(".activeall").mouseover(function(){
			$(this).show();
			}).mouseout(function(){
				$(this).hide();
				})
	}).mouseout(function(){
		$(".activeall").hide();
		});
		
	/*搜索框*/	
	$(".searchcon").focus(function(){
		if($(this).val()==this.defaultValue){
			$(this).val("");
			}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val(this.defaultValue);
			}
	});
		
	/*购物车*/
	$(".car").mouseover(function(){
		$(".carproduct").show();
		offset=$(this).offset();
		$(".carproduct").css({"top":(offset.top+42)+"px","left":(offset.left-35)+"px"});
		$(".carproduct").mouseover(function(){
			$(this).show();
			}).mouseout(function(){
				$(this).hide();
				})
	}).mouseout(function(){
		$(".carproduct").hide();
		});
});