$(document).ready(function(){
	// Expand the options when mouse is over the multimenu sidebar
	$('.extension').mouseover(function(){
		$('.side-extension').css('width', '300px');
		$('.side-extension>li').css("left", "0");
		$('.highlight-grp>i').css('color', '#8c1515');
		$('.highlight-grp').css('backgroundColor', '#f2f1eb');
	});

	$('.multimenu-sidebar').mouseleave(function(){
		$('.side-extension').css('width', '0');
		$('.side-extension>li').css("left", "-300px");
		$('.highlight-grp>i').css('color', '#f2f1eb');
		$('.highlight-grp').css('backgroundColor', '#8c1515');
	});

	$('.side-extension>li').mouseover(function(){
		$('.highlight-grp>i').css('color', '#8c1515');
		$('.highlight-grp').css('backgroundColor', '#f2f1eb');
	});
	$('.side-extension>li').mouseleave(function(){
		$('.highlight-grp>i').css('color', '#f2f1eb');
		$('.highlight-grp').css('backgroundColor', '#8c1515');
	});
	var open_7 = 0;
	var open_3 = 0;
	var li_ht = 30;
	$('.seven-options').click(function(){
		if (!open_7) {
			$(this).css('height', (50+7*li_ht) + 'px');
			$(this).children('i').css('transform', 'rotate(180deg)');
			open_7 = !open_7;
		} else {
			$(this).css('height', '50px');
			$(this).children('i').css('transform', 'rotate(0)');
			open_7 = !open_7;
		}
	});
	$('.three-options').click(function(){
		if (!open_3) {
			$(this).css('height', (50+3*li_ht) + 'px');
			$(this).children('i').css('transform', 'rotate(180deg)');
			open_3 = !open_3;
		} else {
			$(this).css('height', '50px');
			$(this).children('i').css('transform', 'rotate(0)');
			open_3 = !open_3;
		}
	});
});
